const args = require('args')
const chalk = require('chalk')
const fs = require('fs')
const csv = require('csv-parser')
const uuid = require('uuid/v4')

args.option('input', 'Input filename', 'example_input.csv')
  .option('output', 'Output filename', 'output.csv')
  .option('tokens', 'Tokens filename', 'tokens.csv')

const flags = args.parse(process.argv)

console.log(flags)

const inputFile = flags.input
const tokensFile = flags.tokens
const outputFile = flags.output

// Write csv file headers.
fs.writeFileSync(outputFile, 'email,token\n')
fs.writeFileSync(tokensFile, 'token\n')

fs.createReadStream(inputFile)
  .pipe(csv(['email']))
  .on('data', data => {
    const token = uuid()
    fs.appendFileSync(tokensFile, `${token}\n`)
    fs.appendFileSync(outputFile, `${data.email},${token}\n`)
  })