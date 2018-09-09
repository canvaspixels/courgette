const fs = require('fs');
const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const generateSnippetsSublime = require('./generateSnippetsSublime');

// console.log(generateSnippetsSublime);

const createStepDefLine = (matcher, code, notes) =>
  [`${matcher.replace(/\((.*)\)/g, '$1')}`, code, notes || ''];

const padLongestMatcher = (stepDefLns) => {
  const stepDefLines = stepDefLns;
  let longestMatcherLength = 0;
  let longestIndex;

  stepDefLines.forEach((stepDefLine, i) => {
    const len = stepDefLine[0].length;
    if (len > longestMatcherLength && len < 60) {
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
    const code = generateSnippetsSublime[type][stepDefNum++]; // eslint-disable-line no-plusplus
    const zeroOrManyNotMatcher = /\((.*not.*)\)\*/;
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\|/g, ' OR ')
      .replace(/\(\?\:(.*)\)/g, '$1');

    const matcher = newMatcher.replace(zeroOrManyNotMatcher, '');
    newStepDefLines.push(createStepDefLine(matcher, code, step.notes));

    if (newMatcher.match(zeroOrManyNotMatcher)) {
      const matcher2 = newMatcher.replace(zeroOrManyNotMatcher, '$1');
      const code2 = generateSnippetsSublime[type][stepDefNum++]; // eslint-disable-line no-plusplus
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
