async function getNames(names) {
  try {
    const namesPromise = await new Promise((resolve, reject) => {
      if (names) {
        let namesFound = names.map((name) => "teste-" + name);
        resolve(namesFound);
      }

      reject("deu erro");
    });

    console.log(namesPromise);
  } catch (error) {
    console.log(error);
  }
}

getNames("");
