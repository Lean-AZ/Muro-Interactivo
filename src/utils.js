// src/utils.js
export function saveToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
export function loadFromLS(key, defaultValue) {
  const raw = localStorage.getItem(key)
  return raw ? JSON.parse(raw) : defaultValue
}
