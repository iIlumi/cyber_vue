const { createApp, ref, watch } = Vue

createApp({
  setup() {
    const selectedOption = ref(4)
    const deck = ref(createDeck(selectedOption.value))

    // In this static render there flash of image slow load from api
    const selectCard = (card) => {
      console.log("🚀 main L11-selectCard", card)
      card.isCovered = !card.isCovered
    }

    watch(selectedOption, (newValue) => {
      console.log("🚀 main L15-newValue", newValue, typeof newValue)
    })

    return {
      selectedOption,
      gameOptions,
      deck,
      selectCard
    }
  }
}).mount("#app")
