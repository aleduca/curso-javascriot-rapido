class Person {
  constructor(myName, age) {
    this.myName = myName;
    this.age = age;
  }

  info() {
    return this.myName + " " + this.age;
  }
}

const person = new Person("Alexandre", 39);
console.log(person.info());
