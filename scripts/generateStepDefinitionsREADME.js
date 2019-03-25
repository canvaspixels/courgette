const fs = require('fs');
const createSnippetsCollection = require('./createSnippetsCollection');

const createStepDefLine = (matcher, code, notes) =>
  [matcher, code, notes || ''];

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

const createStepDefLines = (steps) => {
  const newStepDefLines = [];
  steps.forEach((step) => {
    const notMatcher = /not\*/g;
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*?)\)\?/g, (match, p1) => p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\|/g, ' OR ')
      .replace(/\(\?\:(.*)\)/g, '$1')
      .replace(/\((.*)\)/g, '$1');
      // .replace(/\s?/g, '(s)');

    let { notes } = step;
    if (newMatcher.match(notMatcher)) {
      notes = '';
    }

    newStepDefLines.push(createStepDefLine(newMatcher.replace(notMatcher, 'not'), step.code, notes));
  });

  padLongestMatcher(newStepDefLines);

  return newStepDefLines
    .map((newStepDefLine) => `| ${newStepDefLine.join(' | ')} |`);
};

const noPORequiredFilter = (step) => step.pageObjectNotRequired;
const pORequiredFilter = (step) => !step.pageObjectNotRequired;

const givenSteps = createSnippetsCollection.stepsWithSnippetCodes.given;
const whenSteps = createSnippetsCollection.stepsWithSnippetCodes.when;
const thenSteps = createSnippetsCollection.stepsWithSnippetCodes.then;
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
