const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const selectValue = 4
    const deck = createDeck(selectValue)
    // In this static render there flash of image slow load from api

    return {
      selectValue,
      gameOptions,
      deck
    }
  }
}).mount("#app")
