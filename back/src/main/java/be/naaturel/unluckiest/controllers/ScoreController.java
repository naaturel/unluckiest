package be.naaturel.unluckiest.controllers;

import be.naaturel.unluckiest.entities.ScoreEntity;
import be.naaturel.unluckiest.models.Score;
import be.naaturel.unluckiest.repositories.ScoreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {

    private final ScoreRepo scoreRepo;

    @Autowired
    public ScoreController(ScoreRepo scoreRepo){
        this.scoreRepo = scoreRepo;
    }

    @PostMapping("/api/submit")
    public ResponseEntity<?> submit(@RequestBody Score s){

        ScoreEntity se = new ScoreEntity();
        se.owner = s.getOwner();
        se.value = s.getValue();

        try{
            scoreRepo.save(se);
        } catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/leaderboard")
    public ResponseEntity<?> leaderboard(){
        return ResponseEntity.ok(scoreRepo.findLeaderboard());
    }

}