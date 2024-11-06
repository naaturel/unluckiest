export class Game {

    public playerName : string;
    public result : number;
    public state : GameState;
    private readonly range : number;

    constructor() {
        this.playerName = "";
        this.result = -1;
        this.state = GameState.Unplayed;
        this.range = 100
    }

    public play() {
        this.result = this.getRandomNumber();
    }

    public playerExists() : boolean{
        return false;
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