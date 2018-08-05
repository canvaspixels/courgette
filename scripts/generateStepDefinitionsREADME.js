const fs = require('fs');
const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');

const createStepDefLine = (matcher, notes) =>
  [`${matcher.replace(/\((.*)\)/g, '$1')}`, notes || ''];

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

const createStepDefLines = (steps) => {
  const newStepDefLines = [];
  steps.forEach((step, i) => {
    const zeroOrManyMatcher = /\((.*)\)\*/;
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => {
        return p1.replace(/([^ ]+)/, '_$1_')
      })
      .replace(/\(\?\:(.*)\)/g, '$1');
    const matcher = newMatcher.replace(zeroOrManyMatcher, '');
    newStepDefLines.push(createStepDefLine(matcher, step.notes));

    if (newMatcher.match(zeroOrManyMatcher)) {
      const matcher2 = newMatcher.replace(zeroOrManyMatcher, '$1');
      newStepDefLines.push(createStepDefLine(matcher2, step.notes));
    }
  });

  padLongestMatcher(newStepDefLines);

  return newStepDefLines
    .map((newStepDefLine) => `| ${newStepDefLine.join(' | ')} |`);
};

const givenStepDefLines = [
  '### Given...',
  '',
  '| Step definition | Notes |',
  '| --- | --- |',
].concat(createStepDefLines(givenSteps));

const whenStepDefLines = [
  '',
  '### When...',
  '',
  '| Step definition | Notes |',
  '| --- | --- |',
].concat(createStepDefLines(whenSteps));

const thenStepDefLines = [
  '',
  '### Then...',
  '',
  '| Step definition | Notes |',
  '| --- | --- |',
].concat(createStepDefLines(thenSteps));

const fileContents = [].concat(givenStepDefLines, whenStepDefLines, thenStepDefLines).join('\n');
fs.writeFileSync('./STEP_DEFINITIONS.md', fileContents);