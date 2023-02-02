const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}
export const getRandomRange = (min, max, rangeSize) => {
  const rangeStart = Math.round(getRandomNumber(min, max - rangeSize))
  return { start: rangeStart, end: Math.round(rangeStart + rangeSize - 1) }
}
