// Handling Local Storage and Session Storage
export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionStorage && JSON.parse(sessionState);
}

export const isLocalState = stateName => {
  const localState = localStorage.getItem(stateName);
  return localStorage && JSON.parse(localState);
}