package be.naaturel.unluckiest.controllers;

import be.naaturel.unluckiest.models.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {

    @Autowired
    public ScoreController(){
    }

    @PostMapping("/api/submit")
    public ResponseEntity<?> register(@RequestBody Score s){
        return null;
    }
}