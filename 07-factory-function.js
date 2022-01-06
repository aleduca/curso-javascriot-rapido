function person(firstName, lastName, age) {
  let fullName = firstName + " " + lastName;

  return {
    fullName: fullName,
    age,
  };
}

let user = person("Joao", "Santos", 39);

console.log(user.fullName, user.age);
