// const events = require('events');
const WDIOReporter = require(`@wdio/reporter`).default;
const clc = require('cli-color');

const esc = {
    sp: '\u0020',
    nl: '\n'
}

/**
 * Initialize a new `Specs` matrix test reporter.
 *
 * @param {Runner} runner
 * @api public
 */
const color = (...args) => {
  return args.join(' ')
}
const timeTrim = (num) => (`00${num}`).slice(-2);
let hitFailure = false
class CucumberReporter extends WDIOReporter {
    constructor (options) {
        options = Object.assign(options, { stdout: true })
        super(options)

        this.on('suite:start', (p) => {
          if (!hitFailure) {
            if (p.parent) {
              this.printLine(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}${clc.blueBright('Scenario')}: ${p.title}`)
            } else {
              this.printLine(`${esc.sp}${esc.sp}${clc.blueBright('Feature')}: ${p.title}`)
            }
          }
        })

        this.on('test:pending', (p) => {
          this.printLine(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.title}`)
        })

        this.on('test:pass', (p) => {
          this.printLine(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${clc.greenBright(p.title)}`)
        })

        this.on('test:fail', (p) => {

// [0-0]   type: 'step',

// [0-0]   title: "And the value of the 'age field' is '18-25'",
// [0-0]   state: 'fail',
// [0-0]   error: {
// [0-0]     name: 'Error',
// [0-0]     message: "AssertionError: expected null to equal '18-25'",
// [0-0]     stack: "AssertionError: expected null to equal '18-25'\n" +
// [0-0]       '    at World.checkInputValue (/Users/alexrogers/Projects/courgettejs/courgette/uiTestHelpers/stepDefinitionsWDIO/checks/checkInputValue.js:15:22)\n' +
// [0-0]       '    at runMicrotasks (<anonymous>)\n' +
// [0-0]       '    at processTicksAndRejections (node:internal/process/task_queues:96:5)'
// [0-0]   },
// [0-0]   duration: 13,
// [0-0]   passed: false,

// [0-0]   file: '/Users/alexrogers/Projects/courgettejs/courgette/testsToValidateStepDefinitions/features/given.feature',
// [0-0]   uid: '175',
// [0-0]   parent: '23',
// [0-0]   argument: undefined,
// [0-0]   tags: [

// [0-0]     { name: '@given-steps', astNodeId: '100' },
// [0-0]     { name: '@given-steps-has-value', astNodeId: '76' }
// [0-0]   ],
// [0-0]   featureName: 'Testing Given steps',
// [0-0]   scenarioName: 'Given the select element has value',
// [0-0]   fullTitle: "23: And the value of the 'age field' is '18-25'",
// [0-0]   cid: '0-0',
// [0-0]   specs: [
// [0-0]     '/Users/alexrogers/Projects/courgettejs/courgette/testsToValidateStepDefinitions/features/given.feature'
// [0-0]   ]
// [0-0] }
          console.log('tags: ', clc.redBright(p.tags.map(({ name }) => name).join(' - ')));
          // this.printLine(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.title}`)
          hitFailure = true
          // this.printLine(ssage', `${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.err.message}${esc.nl}`)
          // this.printLine(ack', `${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.err.stack}${esc.nl}`)
          // this.isSynchronised = true
        })

        this.on('test:end', () => {
          // this.isSynchronised = true
        })

        this.on('end', () => {
          // this.isSynchronised = true
            this.printEpilogueEnd()
        })
    }

    printLine (line) {
        if (!line) {
            return
        }

        const d = new Date();
        const time = `${timeTrim(d.getHours())}:${timeTrim(d.getMinutes())}:${timeTrim(d.getSeconds())}`;
        process.stdout.write(`${d.getFullYear()}-${timeTrim(d.getMonth() + 1)}-${timeTrim(d.getDate())}T${time}${line + esc.nl}`)
    }

    printEpilogueEnd () {
        const { stats } = this.baseReporter
        // const { color, stats } = this.baseReporter
        const results = stats.getCounts()
        const total = results.failures + results.passes + results.pending

        process.stdout.write(color('suite', esc.nl + total + ' steps ('))
        process.stdout.write(color('bright pass', results.passes + ' passed'))
        process.stdout.write(color('bright fail', ', ' + results.failures + ' failed'))
        process.stdout.write(color('pending', ', ' + results.pending + ' pending)' + esc.nl + esc.nl))
    }
}

module.exports = CucumberReporter;