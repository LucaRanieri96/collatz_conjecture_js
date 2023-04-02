const { createApp } = Vue;

createApp({
  data() {
    return {
      inputNumber: "",
      repetition: "",
      result: ""
    };
  },
  methods: {
    collatzConjecture() {
      let n = parseInt(this.inputNumber);
      
      let ripetizioni = 0;
      while (n !== 1) {
        if (n % 2 === 0) {
          n = n / 2;
        } else {
          n = (3 * n) + 1;
        }
        ripetizioni++;
      }
      this.repetition = ripetizioni;
      this.result = n;
    }
  }
}).mount("#app");

// add event listener v-on @ sul button
