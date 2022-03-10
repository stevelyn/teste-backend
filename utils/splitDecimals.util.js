function splitDecimals(number) {
  const splitNumbers = number.toString().split('.')
  const amount = parseInt(splitNumbers[0])
  const decimals = parseInt(splitNumbers[1])
  return { amount, decimals }
}

module.exports = splitDecimals