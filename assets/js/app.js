const { createApp } = Vue;

createApp({
  data() {
    return {
      inputNumber: "",
      result: "",
    };
  },
  methods: {
    collatzConjecture() {
      let n = parseInt(this.inputNumber);
      
      let number = 0;
      while (n !== 1) {
        if (n % 2 === 0) {
          n = n / 2;
        } else {
          n = (3 * n) + 1;
        }
        number++;
      }
      this.result = number;
      console.log(n);
    }
  }
}).mount("#app");

// add event listener v-on @ sul button
