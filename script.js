const App = Vue.createApp({
  data() {
    return {
      inputName: "",
      names: [],
      winner: "",
      form: true,
      text: "Pemenang arisan bulan ini",
      month: 1,
    };
  },
  computed: {
    button() {
      return this.names.length > 1;
    },
  },
  methods: {
    addName() {
      if (this.inputName === "") {
        alert("Nama tidak boleh kosong");
      } else {
        this.names.push(this.inputName);
        this.inputName = "";
      }
    },
    removeName(index) {
      this.names.splice(index, 1);
    },
    randomName() {
      this.form = false;
      const randomIndex = Math.floor(Math.random() * this.names.length);
      this.winner = this.names[randomIndex];
    },
    randomNameAgain() {
      this.month = this.month + 1;
      this.text = "Pemenang arisan " + this.month + " bulan ke depan";
      const randomIndex = Math.floor(Math.random() * this.names.length);
      this.winner = this.names[randomIndex];
    },
    reset() {
      this.form = true;
      this.names = [];
      this.winner = "";
      this.month = "Pemenang arisan bulan ini";
    },
  },
}).mount("#app");
