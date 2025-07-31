export const saveToLocal = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const getFromLocal = (key) => JSON.parse(localStorage.getItem(key));
