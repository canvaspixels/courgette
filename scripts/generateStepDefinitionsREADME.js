const fs = require('fs');
const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const generateSublimeStepDefSnippets = require('./generateSublimeStepDefSnippets');

console.log(generateSublimeStepDefSnippets);

const createStepDefLine = (matcher, code, notes) =>
  [`${matcher.replace(/\((.*)\)/g, '$1')}`, code, notes || ''];

const padLongestMatcher = (stepDefLines) => {
  let longestMatcherLength = 0;
  let longestIndex;

  stepDefLines.forEach((stepDefLine, i) => {
    if (stepDefLine[0].length > longestMatcherLength) {
      longestIndex = i;
      longestMatcherLength = stepDefLine[0].length;
    }
  });

  stepDefLines[longestIndex][0] = stepDefLines[longestIndex][0].replace(/ /g, '&nbsp;');

  return stepDefLines;
};

const createStepDefLines = (steps, type) => {
  let stepDefNum = 0;
  const newStepDefLines = [];
  steps.forEach((step) => {
    const code = generateSublimeStepDefSnippets[type][stepDefNum++];
    const zeroOrManyMatcher = /\((.*)\)\*/;
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => {
        return p1.replace(/([^ ]+)/, '_$1_')
      })
      .replace(/\(\?\:(.*)\)/g, '$1');
    const matcher = newMatcher.replace(zeroOrManyMatcher, '');
    newStepDefLines.push(createStepDefLine(matcher, code, step.notes));

    if (newMatcher.match(zeroOrManyMatcher)) {
      const matcher2 = newMatcher.replace(zeroOrManyMatcher, '$1');
      const code2 = generateSublimeStepDefSnippets[type][stepDefNum++];
      newStepDefLines.push(createStepDefLine(matcher2, code2, step.notes));
    }
  });

  padLongestMatcher(newStepDefLines);

  return newStepDefLines
    .map((newStepDefLine) => `| ${newStepDefLine.join(' | ')} |`);
};

const givenStepDefLines = [
  '## Step Definitions',
  '',
  'Note that the words in italics are optional.',
  '',
  '### Given...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(givenSteps, 'given'));

const whenStepDefLines = [
  '',
  '### When...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(whenSteps, 'when'));

const thenStepDefLines = [
  '',
  '### Then...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(thenSteps, 'then'));

const fileContents = [].concat(givenStepDefLines, whenStepDefLines, thenStepDefLines).join('\n');
fs.writeFileSync('./STEP_DEFINITIONS.md', fileContents);