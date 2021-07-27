import wordsList from './static/words.json'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomWord() {
  return wordsList[randomInt(0, wordsList.length)]
}

export default getRandomWord
