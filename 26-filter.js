const users = [
  {
    name: "Alexandre",
    age: 39,
    is_admin: 1,
  },
  {
    name: "Maria",
    age: 39,
    is_admin: 0,
  },
  {
    name: "Pedro",
    age: 39,
    is_admin: 0,
  },
];

const usersNotAdmin = users.filter((user) => {
  return user.is_admin === 1;
});

usersNotAdmin;
