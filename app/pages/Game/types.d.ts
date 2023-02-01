type GameStatus = 'not-started' | 'started' | 'end'

interface Game {
    status: GameStatus
    name: string
    startTime: number
}