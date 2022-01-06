let person = {
  myName: "Alexandre",
  info: function () {
    return this.myName;
  },
  colors: ["red", "blue"],
  user: {
    myName: "Joao",
  },
};

console.log(person.info());
