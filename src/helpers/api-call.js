import { AUTH_TOKEN, API_URL } from "./constants";

const getcountry = () => {
  return fetch(
    API_URL + "/countries/?fields=id,name&no_paginate=true&order_by=name",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
      },
    },
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const getcities = (city) => {
  return fetch(
    API_URL +
      `/countries/${city}/cities?fields=id,name,lat,lon&no_paginate=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
      },
    },
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { getcountry, getcities };
