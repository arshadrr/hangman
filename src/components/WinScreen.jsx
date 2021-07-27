import React from 'react'
import PlayAgainButton from './PlayAgainButton.jsx'
import PopperIconUrl from '../static/popper.png'

function WinScreen({playAgainCallback}) {
  const winScreenStyles = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
  const winStyles ={
    padding: "10px"
  }

  return (
    <div style={winScreenStyles}>
      <img src={PopperIconUrl} alt="" />
      <div style={winStyles}>You Win</div>
      <PlayAgainButton playAgainCallback={playAgainCallback} />
    </div>
  )
}

export default WinScreen
