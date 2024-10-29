import {writable} from "svelte/store";
import {Score} from "../models/score";
import {getLeaderboard, submitScore} from "./requests";

let scores : Score[] = []

function sort(scores : Score[]){
    if(scores.length >= 2) scores.sort((s1 : Score, s2 : Score) =>  s2.value - s1.value)
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

        load:  (data : Score[]) => {
            let res = sort(data);
            set(res);
        },
    };
}

export const scoreStore = createStore();