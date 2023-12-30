import { Pos } from './pos'

export type Dir = 'n' | 'e' | 's' | 'w'

export function flipDir(dir: Dir): Dir {
  switch (dir) {
    case 'n':
      return 's'
    case 'e':
      return 'w'
    case 's':
      return 'n'
    case 'w':
      return 'e'
  }
}

export function rotateCW(dir: Dir): Dir {
  switch (dir) {
    case 'n':
      return 'e'
    case 'e':
      return 's'
    case 's':
      return 'w'
    case 'w':
      return 'n'
  }
}

export function rotateCCW(dir: Dir): Dir {
  switch (dir) {
    case 'n':
      return 'w'
    case 'e':
      return 'n'
    case 's':
      return 'e'
    case 'w':
      return 's'
  }
}

export function move(pos: Pos, dir: Dir): Pos {
  switch (dir) {
    case 'n':
      return { x: pos.x, y: pos.y - 1 }
    case 'e':
      return { x: pos.x + 1, y: pos.y }
    case 's':
      return { x: pos.x, y: pos.y + 1 }
    case 'w':
      return { x: pos.x - 1, y: pos.y }
  }
}
