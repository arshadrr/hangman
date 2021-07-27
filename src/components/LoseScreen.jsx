import React from 'react'
import PlayAgainButton from './PlayAgainButton.jsx'
import NeutralIconUrl from '../static/neutral.png'

function LoseScreen({playAgainCallback}) {
  const lostScreenStyles = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
  const lostStyles = {
    padding: "10px"
  }

  return (
    <div style={lostScreenStyles}>
      <img src={NeutralIconUrl} alt="" />
      <div style={lostStyles} >You Lost</div>
      <PlayAgainButton playAgainCallback={playAgainCallback} />
    </div>
  )
}

export default LoseScreen
