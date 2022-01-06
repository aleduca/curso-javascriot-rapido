let names = ["Alexandre", "Joao"];

const namesPromise = new Promise((resolve, reject) => {
  if (names) {
    let namesFound = names.map((name) => "teste-" + name);
    resolve(namesFound);
  }

  reject("deu erro");
});

namesPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
