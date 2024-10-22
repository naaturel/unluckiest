import {writable} from "svelte/store";
import {Score} from "../models/score";
import {browser} from "$app/environment"

let localStorageKey = "scores"

function isBrowser() {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function createStore(){

    const storedValue = isBrowser() ? localStorage.getItem(localStorageKey) : null;

    const { set, update, subscribe } = writable<Score[]>(!storedValue ? [] : JSON.parse(storedValue));

    if (isBrowser()) subscribe(value => localStorage.setItem(localStorageKey, JSON.stringify(value)));

    return {
        update,
        subscribe,
        set : (value : Score[]) => set(!value ? [] : value),
        reset : () => set([]),
        add : (playerName : string, value : number) =>  {
            update(scores => {
                let s = [...scores, new Score({playerName : playerName, value : value})];
                if(s.length >= 2) s.sort((s1 : Score, s2 : Score) =>  s1.value - s2.value)
                return s;
            });
        }
    };
}

export const scoreStore = createStore();