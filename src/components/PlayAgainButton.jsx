import React from 'react'
import replayIconUrl from '../static/rotate-ccw.svg'

function PlayAgainButton({playAgainCallback}) {
  const replayButtonStyles = {
    "margin": "15px",
    "padding": "10px",
    "border": "2px solid black",

  }

  return (
    <a href="#">
      <img src={replayIconUrl} style={replayButtonStyles} onClick={playAgainCallback} />
    </a>
  )
}

export default PlayAgainButton
