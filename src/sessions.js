import { AUTH_TOKEN } from "./constants";

// Get player authentication token
export const getToken = () => {
  return sessionStorage.getItem(AUTH_TOKEN) || null;
};

// Set authentication token
export const setToken = (token) => {
  sessionStorage.setItem(AUTH_TOKEN, token);
};

// Destroy player session
export const destroySession = () => {
  sessionStorage.removeItem(AUTH_TOKEN);
};
