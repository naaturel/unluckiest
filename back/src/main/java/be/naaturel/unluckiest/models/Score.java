package be.naaturel.unluckiest.models;

public class Score {

    private String owner;
    private int value;

    public Score(String owner, int value){
        this.owner = owner;
        this.value = value;
    }

    public String getOwner(){
        return this.owner;
    }

    public int getValue(){
        return this.value;
    }

}
