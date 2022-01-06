function Person() {
  this.name = "Alexandre";

  this.info = () => {
    return "Ola " + this.name;
  };

  const teste = () => {
    console.log(this.info());
  };

  teste();
}

const p = new Person();
console.log(p.info());
