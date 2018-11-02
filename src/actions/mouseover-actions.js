export const MOUSE_OVER_TILE = 'mouseover:mouseOverTile'
export const REMOVE_MOUSEOVER = 'mouseover:removeMouseover'

export function mouseOverTile(tileCoords) {
  return {
    type: MOUSE_OVER_TILE,
    payload: {
      tileCoords: tileCoords
    }
  }
}

export function removeMouseover(tileCoords) {
  return {
    type: REMOVE_MOUSEOVER,
    payload: {
      tileCoords: tileCoords
    }
  }
}