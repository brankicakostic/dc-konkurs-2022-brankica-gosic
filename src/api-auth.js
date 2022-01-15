const signin = (user) => {
  //console.log(JSON.stringify(user));
  return fetch("https://geo.konkurs2022.digitalcube.dev/api/login", {
    method: "POST",
    //mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};



export { signin };
