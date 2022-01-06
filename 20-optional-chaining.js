let user = {
  name: "Alexandre",
};
console.log(user.address?.street);

if (user.address) {
  console.log(user.address.street);
} else {
  console.log("nao existe");
}
