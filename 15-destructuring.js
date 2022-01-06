let user = {
  firstName: "Alexandre",
  lastName: "Cardoso",
  is_admin: true,
};

const { firstName, lastName } = user;

console.log(firstName, lastName);

function person({ firstName, lastName }) {
  console.log(firstName, lastName);
}

person(user);
