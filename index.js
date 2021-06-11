const { evolve } = require('./lib')
const initialState = require('./initialState')

const logger = (result, generation) => {
    console.log(`## Generation ${generation}`)
    console.log('```\n' + result.map(innerArray => innerArray.join(',')).join('\n') + '\n```\n')
}
evolve(initialState, 19, logger)
