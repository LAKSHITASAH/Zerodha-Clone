export const AUTH_KEY = "zerodha_logged_in";

export function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function login() {
  localStorage.setItem(AUTH_KEY, "true");
}

export function logout() {
  localStorage.setItem(AUTH_KEY, "false");
}

export function resetAuth() {
  localStorage.removeItem(AUTH_KEY);
}
