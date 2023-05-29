package com.example.reto5.Controller;

import com.example.reto5.Model.Score;
import com.example.reto5.Service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*") //acepte todas las peticiones entrantes
@RequestMapping("/api/Score")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;
    @GetMapping("/all")  //
    public List<Score> getAll(){
        return scoreService.getAll();
    }

    @GetMapping( "/{id}")
    public Optional<Score> getScore(@PathVariable int id) {
        return scoreService.getScore(id);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Score update(@RequestBody  Score score){
        return scoreService.update(score);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable int id){
        return scoreService.delete(id);
    }
}
