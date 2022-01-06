let user = {
  name: "Alexandre",
  age: 39,
};

let otherUser = { ...user, color: "red" };

otherUser;

let info = ["Alexandre", 39];

function person(name, age) {
  console.log(name, age);
}

person(...info);
