export const LOAD_GAME = 'persistence:loadGame'

export function loadGame(gameData) {
  return {
    type: LOAD_GAME,
    payload: {
      gameData: gameData
    }
  }
}