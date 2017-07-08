
export const CHECK_SOLUTION = 'CHECK_SOLUTION'
export const CLOSE_INSTRUCTIONS = 'CLOSE_INSTRUCTIONS'
export const ITEM_DRAGGED = 'ITEM_DRAGGED'
export const OPEN_INSTRUCTIONS = 'OPEN_INSTRUCTIONS'

export function checkSolution () {
  return {type: CHECK_SOLUTION}
}

export function closeInstructions () {
  return {type: CLOSE_INSTRUCTIONS}
}

export function itemDragged (itemId, itemX, itemY) {
  return {type: ITEM_DRAGGED, itemId, itemX, itemY}
}

export function openInstructions () {
  return {type: OPEN_INSTRUCTIONS}
}
