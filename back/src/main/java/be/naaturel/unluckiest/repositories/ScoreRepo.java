package be.naaturel.unluckiest.repositories;

import be.naaturel.unluckiest.entities.ScoreEntity;
import be.naaturel.unluckiest.models.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ScoreRepo
        extends JpaRepository<ScoreEntity, String> {

    @Query(
            value = "SELECT * FROM Score s HAVING 10;",
            nativeQuery = true)

    List<ScoreEntity> findLeaderboard();
}
