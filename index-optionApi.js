const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Vue with Option Api",
      text: "hello",
      customClass: "text-danger"
    }
  }
}).mount("#app")
