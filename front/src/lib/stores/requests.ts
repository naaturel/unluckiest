import {scoreStore} from "./scoreStore";
import {Score} from "../models/score";

const api_url = import.meta.env.VITE_CLIENT_API_URL

export async function submitScore(owner: string, value : number){
    return await handleRequest(`${api_url}/submit/`,
        {
            method:"POST",
            body : JSON.stringify({owner:owner, value:value}),
            headers: new Headers({'content-type': 'application/json'})
        });
}

export async function getLeaderboard(){
    return await handleRequest(`${api_url}/leaderboard/`,
        { method:"GET" });
}

async function handleRequest(url : string, init : object){
    return await fetch(url, init)
        .then(response => {
            if(response.status === 500) throw new Error(`${response.text()}`);
            if(!response.ok) throw new Error(`${response.status} : ${response.body}`);
            return response
        })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return `Exception: ${error.message}`;
        });
}