function person(name, age, ...rest) {
  console.log(rest[2]["name"]);
}

person("Alexandre", 39, "teste", ["red", "blue"], { name: "Alexandre" });
