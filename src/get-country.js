import React from "react";
import { AUTH_TOKEN } from "./constants";

const getcountry = () => {
  return fetch(
    "https://geo.konkurs2022.digitalcube.dev/api/countries/?fields=id,name&no_paginate=true&order_by=name",
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
    `https://geo.konkurs2022.digitalcube.dev/api/countries/${city}/cities?fields=id,name,lat,lon&no_paginate=true`,
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
