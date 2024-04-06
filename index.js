const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const message = ref("Vue with Composition Api")
    const userName = ref("user--Name")
    const password = ref("password")
    const count = ref(10)

    const submitForm = () => {
      console.log(userName.value, password.value, count.value)
    }

    const handleInput = (event) => {
      console.log(event.target.value)
    }

    const stringMerge = computed(() => {
      console.log(count)
      //   console.log(count.value)
      // wihtout log value -> ko bị render lại ?
      // log count vẫn ko ảnh hưởng
      console.count("🚀🚀 index L20 render")
      return `${userName.value} ${password.value}`
      // Tối ưu dựa trên biến cần tính toán ?
    })
    return {
      message,
      text: "hello",
      customClass: "text-danger",
      count,
      userName,
      password,
      submitForm,
      handleInput,
      stringMerge
    }
  }
}).mount("#app")

createApp({
  setup() {
    const val1 = ref(1)
    const val2 = ref(2)
    const val3 = ref(3)

    const sum = computed(() => {
      console.count("🚀🚀 sum render")
      //   console.log(val3.value)
      console.log(val3)
      return val1.value + val2.value
      // Tối ưu dựa trên biến cần tính toán ?
    })

    const swap1w2 = () => {
      const temp = val1.value
      val1.value = val2.value
      val2.value = temp
    }

    return {
      val1,
      val2,
      val3,
      sum,
      swap1w2
    }
  }
}).mount("#app2")
