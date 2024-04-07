const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const msg = "hello"

    return {
      msg
    }
  }
}).mount("#app")
