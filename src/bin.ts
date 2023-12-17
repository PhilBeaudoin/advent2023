import minimist from 'minimist'
import fs from 'fs-extra'

type Func = (lines: string[]) => Promise<any>

import dec1 from './dec1'
import dec2 from './dec2'
const days: Func[][] = [dec1, dec2]

const argv = minimist(process.argv.slice(2))
const day = parseInt(argv._[0], 10)
const part = argv['1'] ? 1 : argv['2'] ? 2 : 0
if (isNaN(day) || day < 1 || day > days.length || part === 0) {
  console.error('Usage: pnpm start DAY [-1 | -2] [--ex]')
  console.error(`DAY must be between 1 and ${days.length}`)
  process.exit(1)
}

const file = argv.ex ? `example${part}.txt` : `input${part}.txt`

async function run() {
  const path = `./src/dec${day}/${file}`
  const input = await fs.readFile(path, 'utf8')
  const lines = input.split('\n')
  if (lines.length > 0 && lines[lines.length - 1] === '') lines.pop()
  console.log(`Result: `, await days[day - 1][part - 1](lines))
}

run()
