const words = require('an-array-of-english-words')

// Rules

const LENGTH = 5
const INCLUDES = 'rise'
const EXCLUDES = 'a'
const MATCH = '__i_e'

// Code

let matches = []

function run() {
  words.forEach(word => {
    if (word.length === LENGTH && includes(word) && excludes(word) && wordMatches(word)) {
      matches.push(word)
    }
  })

  console.log(matches)
}

function includes(word) {
  const wordLetters = word.split('')
  const includeLetters = INCLUDES.split('')

  for(let i = 0; i < includeLetters.length; i++) {
    const letter = includeLetters[i]

    if (!wordLetters.includes(letter)) {
      return false
    }
  }

  return true
}

function excludes(word) {
  const wordLetters = word.split('')
  const excludeLetters = EXCLUDES.split('')

  for(let i = 0; i < excludeLetters.length; i++) {
    const letter = excludeLetters[i]

    if (wordLetters.includes(letter)) {
      return false
    }
  }

  return true
}

function wordMatches(word) {
  const regex = MATCH.replaceAll('_', '.')

  if (word.length !== MATCH.length) {
    return false
  }

  return word.match(new RegExp(regex, 'g'))
}

run()