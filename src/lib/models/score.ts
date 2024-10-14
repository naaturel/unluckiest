export class Score {

    readonly playerName : string;
    readonly value: number;

    constructor({playerName = "", value = 0}) {
        this.playerName = playerName;
        this.value = value;
    }

}