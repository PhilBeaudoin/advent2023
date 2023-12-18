import minimist from 'minimist'
import fs from 'fs-extra'

type Func = (lines: string[]) => Promise<any>

import dec1 from './dec1'
import dec2 from './dec2'
import dec3 from './dec3'
import dec4 from './dec4'
import dec5 from './dec5'
import dec6 from './dec6'
import dec7 from './dec7'
import dec8 from './dec8'
const days: Func[][] = [dec1, dec2, dec3, dec4, dec5, dec6, dec7, dec8]

const argv = minimist(process.argv.slice(2))
const day = parseInt(argv._[0], 10)
const part = argv['1'] ? 1 : argv['2'] ? 2 : 0
if (isNaN(day) || day < 1 || day > days.length || part === 0) {
  console.error('Usage: pnpm start DAY [-1 | -2] [--ex]')
  console.error(`DAY must be between 1 and ${days.length}`)
  process.exit(1)
}

const file = argv.ex ? `example` : `input`

async function run() {
  let path = `./src/dec${day}/${file}`
  if (await fs.pathExists(path + '.txt')) path += '.txt'
  else path += `${part}.txt`
  const input = await fs.readFile(path, 'utf8')
  const lines = input.split('\n')
  if (lines.length > 0 && lines[lines.length - 1] === '') lines.pop()
  console.log(`Result: `, await days[day - 1][part - 1](lines))
}

run()
