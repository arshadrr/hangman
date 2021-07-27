import React from 'react'
import {has} from '../utils'

function Game({word, guessedCharacters, remainingTries}) {
  //TODO: show a message if a character has already been tried
  let lettersWithHoles = []
  for(let chr of word.split('')) {
    if(has(guessedCharacters, chr)) {
      lettersWithHoles.push(chr)
    } else {
      lettersWithHoles.push("_")
    }
  }

  const gameFrameStyles = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={gameFrameStyles}>
      <LetterSlots lettersWithHoles={lettersWithHoles} />
      <div>{remainingTries} tries left</div>
    </div>
  )
}

function LetterSlots({lettersWithHoles}) {
  const letterSlotsStyles = {
    "display": "flex"
  }

  return (
    <div style={letterSlotsStyles}>
      {
        lettersWithHoles.map((letter, idx) => {
          if(letter === "_") {
            return <Hole key={idx} />
          } else {
            return <Letter key={idx} chr={letter} />
          }
        })
      }
    </div>
  )
}

function Letter({chr}) {
  const letterStyles = {
    "fontSize": "30px",
    "height": "50px",
    "width": "50px",
    "margin": "2px",
    "backgroundColor": "#71EFA3",

    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  return (
    <div style={letterStyles}>
        {chr.toUpperCase()}
    </div>
  )
}

function Hole() {
  const holeStyles = {
    "height": "50px",
    "width": "50px",
    "backgroundColor": "black",
    "margin": "2px"
  }

  return (
    <div style={holeStyles}></div>
  )
}

export default Game
