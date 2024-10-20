//https://www.youtube.com/watch?v=NJwRQgsu1Q8&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=40

//Promise
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("New promise");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise resolved");
});

//Promise with params
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "Abhinav", email: "abhinav@example.com" });
  }, 1000);
}).then((data) => {
  console.log(data.name);
  console.log(data.email);
});

//promise with then chain
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "Abhinav", email: "abhinav@example.com" });
  }, 1000);
})
  .then((data) => {
    return data.name;
  })
  .then((user) => {
    console.log(user);
  });

//Promise with resolve and reject and finally
new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Abhinav", email: "abhinav@example.com" });
    } else {
      reject("Error: An error occurred while resolving promise");
    }
  }, 1000);
})
  .then((data) => {
    console.log(data.name);
    console.log(data.email);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// aysnc await
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Abhinav", email: "abhinav@example.com" });
    } else {
      reject("Error: An error occurred while resolving promise");
    }
  }, 1000);
});

async function consumePromiseOne() {
  try {
    const response = await promiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseOne();

//Fetch API using aync await
async function getData() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
//getData();

//Fetch API using promise
fetch("https://catfact.ninja/fact")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((error) => {
    console.log(error);
  });
