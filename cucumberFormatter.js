const events = require('events')

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
class CucumberReporter extends events.EventEmitter {
    constructor (baseReporter, config, options = {}) {
        super()

        this.baseReporter = baseReporter

        this.on('suite:start', (p) => {
            if (p.parent) {
                this.printLine('suite', `${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}Scenario: ${p.title}`)
            } else {
                this.printLine('medium', `${esc.nl}${esc.sp}${esc.sp}Feature: ${p.title}`)
            }
        })

        this.on('test:pending', (p) => {
            this.printLine('pending', `${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.title}`)
        })

        this.on('test:pass', (p) => {
            this.printLine('bright pass', `${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.title}`)
        })

        this.on('test:fail', (p) => {
            this.printLine('bright fail', `${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.title}`)
            this.printLine('error message', `${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.err.message}${esc.nl}`)
            this.printLine('error stack', `${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${p.err.stack}${esc.nl}`)
        })

        this.on('test:end', () => {
        })

        this.on('end', () => {
            this.printEpilogueEnd()
        })
    }

    printLine (status, line) {
        // const { color } = this.baseReporter

        if (!status || !line) {
            return
        }

        process.stdout.write(color(status, line + esc.nl))
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