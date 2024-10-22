import {scoreStore} from "./scoreStore";
import {Score} from "../models/score";

export async function submitScore(owner: string, value : number){
    return await handleRequest("http://localhost:8080/api/submit/",
        {
            method:"POST",
            body : JSON.stringify({owner:owner, value:value}),
            headers: new Headers({'content-type': 'application/json'})
        });
}

export async function getLeaderboard(){
    return await handleRequest("http://localhost:8080/api/leaderboard",
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