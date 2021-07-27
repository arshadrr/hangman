import React, {useEffect, useState} from 'react'
import Game from './Game'
import {has} from '../utils'

const singleAlphabetRegExp = new RegExp('^[a-zA-Z]$')
function isAlphabet(character) {
  return singleAlphabetRegExp.test(character)
}

function wordToCharacters(word) {
  // given a word, return a list of (without duplicates) characters found in the
  // word. 
  // e.g wordToCharacters('hello') would return ['h', 'e', 'l', 'o']
  word = word.toLowerCase()

  const characters = []
  for(let chr of word.split('')) {
    if(!has(characters, chr)) {
      characters.push(chr)
    }
  }

  return characters
}

function GameContainer({wonGameCallback, lostGameCallback, word}) {
  const [remainingTries, setRemainingTries] = useState(8)
  const [guessedCharacters, setGuessedCharacters] = useState([])
  const [charactersToGuess, setCharactersToGuess] = useState(wordToCharacters(word))

  // The logic of the game. Given the present state and the latest character
  // input, update the state
  const move = (character) => {
    // The user has already used this character, skip
    if(has(guessedCharacters, character)) {
      return
    }

    // The user got a character right
    if(has(charactersToGuess, character)) {
      // If only one letter is in charactersToGuess, and this letter is correct,
      // the game has been won
      if(charactersToGuess.length === 1) {
        wonGameCallback()
        return
      }

      // add the character to guessedCharacters
      setGuessedCharacters(guessedCharacters.concat(character))

      // remove the character from charactersToGuess. use a new shallow copy to
      // avoid mutating the old array
      const newToGuess = [...charactersToGuess]
      const idx = charactersToGuess.indexOf(character)
      newToGuess.splice(idx, 1)
      setCharactersToGuess(newToGuess)

      return
    }

    // The user got a character wrong
    // Check if only one try is remaining. If so, this move reduces the tries to
    // zero and the game is won
    if(remainingTries === 1) {
      lostGameCallback()
      return
    }
    // Otherwise, decrement the number of remaining tries by one
    setRemainingTries(remainingTries - 1)
    // Track that a character has already been tried
    setGuessedCharacters(guessedCharacters.concat(character))
  }

  // Register keyDown handler for taking care of inputs to the game
  const keyDownHandler = (event) => {
    if(isAlphabet(event.key)){
      move(event.key)
    }
  }
  const removeKeyDownHandler = () => {
    window.removeEventListener('keydown', keyDownHandler)
  }
  // Attach it using a hook
  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler)
    return removeKeyDownHandler
  })


  // Render the screen
  return (
      <Game 
        word={word}
        guessedCharacters={guessedCharacters} 
        remainingTries={remainingTries}
      />
  )
}

export default GameContainer
