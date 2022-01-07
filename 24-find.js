const names = ["Alexandre", "Maria", "Pedro", "Sandra"];

const users = [
  {
    name: "Alexandre",
    age: 39,
  },
  {
    name: "Maria",
    age: 39,
  },
  {
    name: "Pedro",
    age: 39,
  },
];

const userFound = users.find((user) => {
  return user.name === "Maria";
});

userFound;
