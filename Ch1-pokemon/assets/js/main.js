const { createApp, ref, watch } = Vue

createApp({
  setup() {
    const selectedOption = ref(8)
    const deck = ref(createDeck(selectedOption.value))
    const currentPair = []
    const pairRef = ref([])

    // In this static render there flash of image slow load from api
    const selectCard = (card) => {
      // prevent select more when 2 cards are in animation checking
      const styleCheck = pairRef.value
      // const styleCheck = currentPair

      if (styleCheck.length === 2) {
        return
      }

      card.isCovered = !card.isCovered
      styleCheck.push(card)

      // because mutation of the same object
      // no need to loop find in deck
      // 1st timeout to finish the animation
      // need calculate animation time

      // if (currentPair.length < 2) return

      // setTimeout(() => {
      //   const [card1, card2] = currentPair
      //   if (card1.name !== card2.name) {
      //     card1.isCovered = true
      //     card2.isCovered = true
      //     // this timeout to wait for 2 card covered back
      //     setTimeout(() => {
      //       currentPair.length = 0
      //     }, 500)
      //   } else {
      //     currentPair.length = 0
      //   }
      // }, 500)
      // hard logic -> switch watch
    }

    watch(selectedOption, (newValue) => {
      console.log("🚀 main L15-newValue", newValue, typeof newValue)
    })

    // cannot watch non-reactive value like currentPair
    watch(
      () => pairRef.value.length,
      () => {
        const refValue = pairRef.value
        if (refValue.length !== 2) return
        const [card1, card2] = refValue
        if (card1.name === card2.name) {
          refValue.length = 0
          return
        }

        setTimeout(() => {
          card1.isCovered = true
          card2.isCovered = true
          refValue.length = 0
        }, 600)
      }
    )

    return {
      selectedOption,
      gameOptions,
      deck,
      selectCard
    }
  }
}).mount("#app")
