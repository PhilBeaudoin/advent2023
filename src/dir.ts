import { Pos } from './pos'

export const DIRS = ['n', 'e', 's', 'w'] as const

export type Dir = (typeof DIRS)[number]

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

export function move(pos: Pos, dir: Dir, dist = 1): Pos {
  switch (dir) {
    case 'n':
      return { x: pos.x, y: pos.y - dist }
    case 'e':
      return { x: pos.x + dist, y: pos.y }
    case 's':
      return { x: pos.x, y: pos.y + dist }
    case 'w':
      return { x: pos.x - dist, y: pos.y }
  }
}
