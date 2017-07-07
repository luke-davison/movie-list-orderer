// this function takes two arrays and finds the least number of single moves that is required to make the current order into the correct order

function getSortingMoves (currentOrder, correctOrder) {
  const correctPositions = currentOrder.map(item => correctOrder.indexOf(item))
  const differentOrders = []
  correctPositions.forEach((position, i) => findDifferentOrders(Array.from(correctPositions).splice(i), []))

  function findDifferentOrders (positions, order) {
    const thisPosition = positions.shift()
    order.push(thisPosition)
    if (positions.length) {
      const notLast = positions.reduce((notLast, nextPosition, i) => {
        if (nextPosition >= thisPosition) {
          findDifferentOrders(positions.splice(i), order)
          return true
        }
        return notLast
      }, false)
      if (notLast) return
    }
    differentOrders.push(order)
  }

  const bestOrder = differentOrders.reduce((bestOrder, order) => {
    if (order.length > bestOrder.length) return order
    return bestOrder
  }, [])

  const positionsToBeMoved = currentOrder
    .map((value, i) => {
      return {current: i, correct: correctPositions[i], value}
    })
    .filter(obj => bestOrder.find(position => position === obj.correct) === undefined)
    .sort((a, b) => a.correct - b.correct)

  return positionsToBeMoved
}

module.exports = getSortingMoves
