const urlBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const apiData = Array.from({ length: 100 }).map((_, index) => {
  const id = index + 1
  const obj = {
    id: id,
    name: `pkm-${id}`,
    images: {
      game: {
        front: `${urlBase}/${id}.png`,
        back: `${urlBase}/back/${id}.png`
      },
      png: {
        front: `${urlBase}/other/official-artwork/${id}.png`
      },
      svg: {
        front: `${urlBase}/other/dream-world/${id}.svg`
      }
    }
  }

  return obj
})

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const gameOptions = Array.from({ length: 4 }, (_, index) => {
  const id = index + 1
  const offsetValue = 4

  return {
    id: `gameOption${id}`,
    value: offsetValue + index * 2
  }
})

// number of cards in deck will be double the selectValue
// because each value return an pair of cards
const createDeck = (selectValue) => {
  const deck = []
  for (let i = 0; i < selectValue; i++) {
    const randomIndex = getRandomNumber(0, apiData.length)
    const randomPokemon = { ...apiData[randomIndex], isCovered: true }

    deck.push(randomPokemon, {
      ...randomPokemon,
      id: randomPokemon.id + selectValue
    })
  }
  return deck.sort(() => Math.random() - 0.5)
}
