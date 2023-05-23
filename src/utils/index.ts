export const nthNumber = (number: number) => {
  if (number > 3 && number < 21) return 'th'
  switch (number % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

const N = 2

export const formatBigint = (n?: bigint) => {
  if (n) {
    //const str = n.toString()
    //const len = str.length
    //if (len > N) {
    //return `${str.slice(0, len - N)}.${str.slice(len - N)}`
    //}
    return n.toString()
  } else {
    return '0'
  }
}
