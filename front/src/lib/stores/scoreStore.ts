import {writable} from "svelte/store";
import {Score} from "../models/score";
import {getLeaderboard, submitScore} from "./requests";

let scores : Score[] = []

function sort(scores : Score[]){
    if(scores.length >= 2) scores.sort((s1 : Score, s2 : Score) =>  s1.value - s2.value)
    return scores;
}

function createStore(){

    const { set, update, subscribe } = writable<Score[]>(scores);

    return {
        update,
        subscribe,
        set : (value : Score[]) => set(!value ? [] : value),

        add : async (playerName : string, value : number) =>  {
            await submitScore(playerName, value)
            update(scores => {
                let s = [...scores, new Score({playerName : playerName, value : value})];
                return sort(s);
            });
        },

        loadData: async () => {
            if(scores.length !== 0) return;
            let res = sort(await getLeaderboard());
            set(res);
        },
    };
}

export const scoreStore = createStore();