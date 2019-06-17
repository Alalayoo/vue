import Cookies from 'js-cookie';

const Token = 'Token'

export function getToken() {
  return Cookies.get(Token)
}

export function setToken(token) {
  Cookies.set(Token, token)
}

export function removeToken() {
  Cookies.remove(Token)
}
