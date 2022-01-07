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

const indexFound = users.findIndex((user) => {
  return user.name === "Maria";
});

users.splice(indexFound, 1);

users;
