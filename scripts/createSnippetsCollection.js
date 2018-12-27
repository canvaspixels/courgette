// To gen snippets in project and in ide
// node scripts/generateSnippetsAtom.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsAtom.js --genFiles --justForIDE

const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
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

const genSnippets = (steps, type) => {
  if (!stepsWithSnippetCodes[type]) {
    stepsWithSnippetCodes[type] = [];
  }
  if (!snippetCodes[type]) {
    snippetCodes[type] = [];
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
    snippetCodes[type].push(newCode);

    // add steps with their snippets for building the README
    stepsWithSnippetCodes[type].push(Object.assign({}, step, {
      code: newCode,
      matcher: stepMatcher.replace(zeroOrManyNotMatcher, ''),
    }));

    genSnippet(matcher, newCode);

    if (newMatcher.match(zeroOrManyNotMatcher)) {
      const newCode2 = `${type}not${step.code || generatedCode}`;
      const matcher2 = matcherWithReplacedPlaceholders
        .replace(/\((.*)\)\*/g, '$1');
      snippetCodes[type].push(newCode2);

      // add steps with their snippets for building the README
      stepsWithSnippetCodes[type].push(Object.assign({}, step, {
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

module.exports = {
  snippetsCollection,
  snippetCodes,
  stepsWithSnippetCodes,
};
