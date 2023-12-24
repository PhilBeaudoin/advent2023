export function transpose(matrix: string[]): string[] {
  const result: string[] = []
  for (let i = 0; i < matrix[0].length; i++) {
    result.push(matrix.map((row) => row[i]).join(''))
  }
  return result
}

export function flipStr(str: string): string {
  return str.split('').reverse().join('')
}

export function flipMatrix(matrix: string[]): string[] {
  return matrix.map((row) => flipStr(row))
}
