import { Direction, Position, Rover } from './models'

export function parseInput(input: string): {
  mapSize: [number, number]
  rovers: Array<Rover>
} {
  const lines = input.split('\n').map((x) => x.trim())
  const mapSize = lines
    ?.shift()
    ?.split(' ')
    ?.map((x) => parseInt(x)) as [number, number]

  const rovers: Array<Rover> = []

  while (true) {
    const startLine = lines.shift()?.split(' ')
    if (!startLine || !startLine.length) {
      break
    }

    const position: Position = {
      x: parseInt(startLine[0]),
      y: parseInt(startLine[1]),
      direction: startLine[2] as Direction,
    }

    const instructions = lines.shift()
    if (!instructions) {
      break
    }

    rovers.push({
      position,
      instructions,
    } as Rover)
  }

  return { mapSize, rovers }
}
