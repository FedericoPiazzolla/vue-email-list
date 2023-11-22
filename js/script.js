const { createApp } = Vue;

createApp({
  data() {
    return {
      arrayMail: [] ,
      numberEmail: "" ,
      inputNumber: "" ,
    }
  },
  methods: {
    genRndEmail: function () {
      this.arrayMail = [];
      this.numberEmail = this.inputNumber;

      for (let i = 0; i < this.numberEmail; i++) {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          this.arrayMail.push(resp.data.response)
        })
        
      }
      this.inputNumber = "";
    },
  },
}).mount("#app");