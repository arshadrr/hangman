import React, {useState} from 'react'
import getRandomWord from './words.js'

import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import WinScreen from './components/WinScreen'
import LoseScreen from './components/LoseScreen'

const gameProgressStates = {
  TITLE_SCREEN: Symbol('title_screen'),
  PLAYING: Symbol('playing'),
  WON: Symbol('won'),
  LOST: Symbol('lost')
}

function App() {
  const [gameProgress, setGameProgress] = useState(gameProgressStates.TITLE_SCREEN)

  const playGame = () => setGameProgress(gameProgressStates.PLAYING)
  const handleLoss = () => setGameProgress(gameProgressStates.LOST)
  const handleWin = () => setGameProgress(gameProgressStates.WON)
  const replayGame = () => setGameProgress(gameProgressStates.TITLE_SCREEN)

  if(gameProgress === gameProgressStates.TITLE_SCREEN) {
    return <TitleScreen playGameCallback={playGame} />
  }
  if(gameProgress === gameProgressStates.PLAYING) {
    return <GameScreen
              word={getRandomWord()}
              wonGameCallback={handleWin}
              lostGameCallback={handleLoss}
            />
  }
  if(gameProgress === gameProgressStates.WON) {
    return <WinScreen playAgainCallback={replayGame} />
  }
  if(gameProgress === gameProgressStates.LOST) {
    return <LoseScreen playAgainCallback={replayGame} />
  }
}

export default App
