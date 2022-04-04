// To gen snippets in project and in ide
// node scripts/generateSnippetsAtom.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsAtom.js --genFiles --justForIDE

const givenSteps = require('../uiTestHelpers/stepDefinitionsWDIO/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitionsWDIO/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitionsWDIO/commonThenSteps');
const mobileGivenSteps = require('../uiTestHelpers/mobileStepDefinitions/commonGivenSteps');
const mobileWhenSteps = require('../uiTestHelpers/mobileStepDefinitions/commonWhenSteps');
const mobileThenSteps = require('../uiTestHelpers/mobileStepDefinitions/commonThenSteps');
const placeholders = require('../placeholders');

const snippetCodes = {};
const stepsWithSnippetCodes = {};

const snippetsCollection = [];

const genSnippet = (matcher, code) => {
  snippetsCollection.push({
    code,
    snippet: matcher,
    description: matcher,
  });
};

const genSnippets = (steps, type, objKey) => {
  if (!stepsWithSnippetCodes[objKey || type]) {
    stepsWithSnippetCodes[objKey || type] = [];
  }
  if (!snippetCodes[objKey || type]) {
    snippetCodes[objKey || type] = [];
  }
  steps.forEach((step) => {
    const allPlaceholders = placeholders.join('|');
    const typeTitleCased = type.replace(/^./, (p1) => p1.toUpperCase());
    const stepMatcher = `${typeTitleCased} ${step.matcher}`;

    const zeroOrManyNotMatcher = /\(([^\)]*not[^\)]*)\)\*/g;

    const newMatcher = stepMatcher // used for steps with "not" alternatives
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\(\?\:(.*)\)/g, '$1');

    const generatedCode = `${step.path ?
      step.path.replace(/[./]*/g, '').replace(/^(actions|checks)/g, '') : 'die'}`;

    const matcherWithReplacedPlaceholders = stepMatcher
      .replace(new RegExp(`^${typeTitleCased}`), () => `\${1:${typeTitleCased}\}`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${2:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${3:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${4:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${5:${p1}\}'`)
      .replace(/\(\?\:(.*?)\)\?/g, '$1');

    const matcher = matcherWithReplacedPlaceholders
      .replace(zeroOrManyNotMatcher, '')
      .replace(/\((.*)\)\*/g, '$1')
      .replace(/\((.*)\)/g, '$1');

    const newCode = `${type}${step.code || generatedCode}`;
    snippetCodes[objKey || type].push(newCode);

    // add steps with their snippets for building the README
    stepsWithSnippetCodes[objKey || type].push(Object.assign({}, step, {
      code: newCode,
      matcher: stepMatcher.replace(zeroOrManyNotMatcher, ''),
    }));

    genSnippet(matcher, newCode);

    if (newMatcher.match(zeroOrManyNotMatcher)) {
      const newCode2 = `${type}not${step.code || generatedCode}`;
      const matcher2 = matcherWithReplacedPlaceholders
        .replace(/\((.*)\)\*/g, '$1');
      snippetCodes[objKey || type].push(newCode2);

      // add steps with their snippets for building the README
      stepsWithSnippetCodes[objKey || type].push(Object.assign({}, step, {
        code: newCode2,
        matcher: stepMatcher,
      }));
      genSnippet(matcher2, newCode2);
    }
  });
};
genSnippets(givenSteps, 'given');
genSnippets(whenSteps, 'when');
genSnippets(thenSteps, 'then');
genSnippets(mobileGivenSteps, 'given', 'mobilegiven');
genSnippets(mobileWhenSteps, 'when', 'mobilewhen');
genSnippets(mobileThenSteps, 'then', 'mobilethen');

module.exports = {
  snippetsCollection,
  snippetCodes,
  stepsWithSnippetCodes,
};
