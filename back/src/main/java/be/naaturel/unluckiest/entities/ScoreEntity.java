package be.naaturel.unluckiest.entities;

import jakarta.persistence.*;

@Entity(name = "Score")
public class ScoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;

    @Column
    public String owner;

    @Column
    public int value;

}