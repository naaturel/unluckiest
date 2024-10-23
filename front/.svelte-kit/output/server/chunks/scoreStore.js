import { w as writable } from "./index.js";
class Score {
  playerName;
  value;
  constructor({ playerName = "", value = 0 }) {
    this.playerName = playerName;
    this.value = value;
  }
}
const api_url = "http://naaturel.be:5000/api";
async function getLeaderboard() {
  return await handleRequest(
    `${api_url}/api/leaderboard/`,
    { method: "GET" }
  );
}
async function handleRequest(url, init) {
  return await fetch(url, init).then((response) => {
    if (response.status === 500) throw new Error(`${response.text()}`);
    if (!response.ok) throw new Error(`${response.status} : ${response.body}`);
    return response;
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    return `Exception: ${error.message}`;
  });
}
function createStore(scores) {
  const { set, update, subscribe } = writable(scores);
  return {
    update,
    subscribe,
    set: (value) => set(!value ? [] : value),
    reset: () => set([]),
    add: (playerName, value) => {
      update((scores2) => {
        let s = [...scores2, new Score({ playerName, value })];
        if (s.length >= 2) s.sort((s1, s2) => s1.value - s2.value);
        return s;
      });
    }
  };
}
async function createStoreFromAPI() {
  console.log("http://naaturel.be:5000/api");
  let scores = await getLeaderboard();
  return createStore(scores);
}
createStoreFromAPI();
