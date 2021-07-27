import React from 'react'

import playIconUrl from '../static/play.svg'

function TitleScreen({playGameCallback}) {
  const titleScreenStyles = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={titleScreenStyles}>
      <GameTitle />
      <Author />
      <PlayButton playGameCallback={playGameCallback} />
    </div>
  )
}

function GameTitle() {
  const gameTitleStyles = {
    "fontFamily": "Rope",
    "fontSize": "100px",
  }

  return (
    <div style={gameTitleStyles}>
      Hangman
    </div>
  )
}

function Author() {
  const authorStyles = {
    "padding": "10px"
  }
  return (
    <div style={authorStyles}>
      by Arshad Riyaz
    </div>
  )
}

function PlayButton({playGameCallback}) {
  const playButtonStyles = {
    "margin": "15px",
    "padding": "10px",
    "border": "2px solid black",

  }

  return (
    <a href="#">
      <img src={playIconUrl} style={playButtonStyles} onClick={playGameCallback} />
    </a>
  )
}

export default TitleScreen
