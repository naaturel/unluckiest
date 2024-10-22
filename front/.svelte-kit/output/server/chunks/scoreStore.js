import { w as writable } from "./index.js";
class Score {
  playerName;
  value;
  constructor({ playerName = "", value = 0 }) {
    this.playerName = playerName;
    this.value = value;
  }
}
let localStorageKey = "scores";
function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}
function createStore() {
  const storedValue = isBrowser() ? localStorage.getItem(localStorageKey) : null;
  const { set, update, subscribe } = writable(!storedValue ? [] : JSON.parse(storedValue));
  if (isBrowser()) subscribe((value) => localStorage.setItem(localStorageKey, JSON.stringify(value)));
  return {
    update,
    subscribe,
    set: (value) => set(!value ? [] : value),
    reset: () => set([]),
    add: (playerName, value) => {
      update((scores) => {
        let s = [...scores, new Score({ playerName, value })];
        if (s.length >= 2) s.sort((s1, s2) => s1.value - s2.value);
        return s;
      });
    }
  };
}
const scoreStore = createStore();
export {
  scoreStore as s
};
