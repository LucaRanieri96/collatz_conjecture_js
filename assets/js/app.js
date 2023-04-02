const { createApp } = Vue;

createApp({
  data() {
    return {
      inputNumber: "",
      repetition: "",
      result: "",
      numbers:[],
    };
  },
  methods: {
    collatzConjecture() {
      let n = parseInt(this.inputNumber);
      if (n > 1) {
        let ripetizioni = 0;
        while (n !== 1) {
          if (n % 2 === 0) {
            n = n / 2;
          } else {
            n = (3 * n) + 1;
          }
          ripetizioni++;
          this.numbers.push(n);
        }
        this.repetition = ripetizioni;
        this.result = n; 
      } else {
        alert("Il numero deve essere maggiore di 1 per far funzionare la funzione")
      }
    }
  }
}).mount("#app");

// add event listener v-on @ sul button
