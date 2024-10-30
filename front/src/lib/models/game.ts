import {scoreStore} from "../stores/scoreStore";

export class Game {

    public name : string;
    public result : number;
    public state : GameState;
    private readonly range : number;

    constructor() {
        this.name = "";
        this.result = -1;
        this.state = GameState.Unplayed;
        this.range = 100
    }

    public async play() {
        this.result = this.getRandomNumber();
        await scoreStore.add(this.name, this.result)
    }

    public hasBeenPlayed() : boolean {
        return this.state == GameState.Played;
    }

    public isRunning() : boolean {
        return this.state == GameState.Running;
    }

    private getRandomNumber() : number{
        let unit = Math.floor(Math.random() * (this.range + 1));

        if(unit === 100){
            let modifier = Math.floor(Math.random() * (this.range + 1));
            return unit*modifier;
        }

        let dec = Math.floor(Math.random() * (this.range));
        return unit + (dec/100);
    }

}

export enum GameState {
    Unplayed,
    Running,
    Played,
}