package be.naaturel.unluckiest.models;

public class Score {

    private String owner;
    private float value;

    public Score(String owner, float value){
        this.owner = owner;
        this.value = value;
    }

    public String getOwner(){
        return this.owner;
    }

    public float getValue(){
        return this.value;
    }

}
