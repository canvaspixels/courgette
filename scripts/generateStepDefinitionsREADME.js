const fs = require('fs');
const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const createSnippetsCollection = require('./createSnippetsCollection');

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
    const code = createSnippetsCollection.snippetCodes[type][stepDefNum++]; // eslint-disable-line no-plusplus
    const zeroOrManyNotMatcher = /\((.*not.*)\)\*/;
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*?)\)\?/g, (match, p1) => p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\|/g, ' OR ')
      .replace(/\(\?\:(.*)\)/g, '$1');

    const matcher = newMatcher.replace(zeroOrManyNotMatcher, '');
    newStepDefLines.push(createStepDefLine(matcher, code, step.notes));

    if (newMatcher.match(zeroOrManyNotMatcher)) {
      const matcher2 = newMatcher.replace(zeroOrManyNotMatcher, '$1');
      const code2 = createSnippetsCollection.snippetCodes[type][stepDefNum++]; // eslint-disable-line no-plusplus
      newStepDefLines.push(createStepDefLine(matcher2, code2, step.notes));
    }
  });

  padLongestMatcher(newStepDefLines);

  return newStepDefLines
    .map((newStepDefLine) => `| ${newStepDefLine.join(' | ')} |`);
};

const noPORequiredFilter = (step) => step.pageObjectNotRequired;
const pORequiredFilter = (step) => !step.pageObjectNotRequired;

const givenStepDefLines = [
  '# Available Step Definitions',
  '',
  'Note that the words in italics are optional.',
  '',
  '## Step definitions that _don’t_ require page objects to work',
  '',
  '### Given...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(givenSteps.filter(noPORequiredFilter), 'given'));

const whenStepDefLines = [
  '',
  '### When...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(whenSteps.filter(noPORequiredFilter), 'when'));

const thenStepDefLines = [
  '',
  '### Then...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(thenSteps.filter(noPORequiredFilter), 'then'));

const givenPOStepDefLines = [
  '',
  '',
  '## Step definitions that require page objects to work',
  '',
  '### Given...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(givenSteps.filter(pORequiredFilter), 'given'));

const whenPOStepDefLines = [
  '',
  '### When...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(whenSteps.filter(pORequiredFilter), 'when'));

const thenPOStepDefLines = [
  '',
  '### Then...',
  '',
  '| Step definition | Snippet Code | Notes |',
  '| --- | --- | --- |',
].concat(createStepDefLines(thenSteps.filter(pORequiredFilter), 'then'));

const fileContents = [].concat(
  givenStepDefLines,
  whenStepDefLines,
  thenStepDefLines,
  givenPOStepDefLines,
  whenPOStepDefLines,
  thenPOStepDefLines,
).join('\n');
fs.writeFileSync('./STEP_DEFINITIONS.md', fileContents);
