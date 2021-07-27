function getWord() {
  // TODO initially return from a fixed list, later figure out how to get random
  // words from some API
}

// TODO: don't allow to use letters that have already been used
function move(state, move){
  // states: 
  //  play_state: Symbol // represents the if the game hasn't started, is being
  //                     // played, or has ended
  //  word: String,
  //  tries_left: Number,
  //  guess_progress: [Boolean], // a list keeping track of
}

function mark_guessed(guess_progress, word, guessed_letter) {
  return word
    .split('')
    .map((chr, idx) => {
      if(guess_progress[idx] == 1 || guessed_letter === chr) {
        return 1
      }
      else {
        return 0
      }
    })
}

module.exports = mark_guessed
