package be.naaturel.unluckiest.entities;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity(name = "Score")
public class ScoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;

    @Column
    public String owner;

    @Column
    public float value;

}