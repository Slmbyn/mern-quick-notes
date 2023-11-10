// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api'

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  // Baby step by returning whatever is sent back by the server
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token)
  console.log(token)
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  const token = localStorage.getItem('token');
  // If there isn't a token, set user to null
  if(!token) return null;
  // If a token exists, it will grab the payload from it
  const payload = JSON.parse(atob(token.split('.')[1]));
  // If there's an expired token, remove it from localStorage and set user to null
  if(payload.exp < Date.now()/ 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser(){
  const token = getToken();
// If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function login(userData) {
    const token = await usersAPI.login(userData);
    localStorage.setItem('token', token)
  // console.log(token)
    return getUser();
    // return token;
  }