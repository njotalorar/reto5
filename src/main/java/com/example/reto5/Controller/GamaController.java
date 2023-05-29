package com.example.reto5.Controller;

import com.example.reto5.Model.Gama;
import com.example.reto5.Service.GamaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*") //acepte todas las peticiones entrantes
@RequestMapping("/api/Gama")
public class GamaController {
    @Autowired
    private GamaService gamaservice;
    @GetMapping(value = "/all")  //
    public List<Gama> getAll(){
        return gamaservice.getAll();
    }

    @GetMapping(value = "/{id}")
    public Optional<Gama> getClient(@PathVariable int id){
        return gamaservice.getGama(id);
    }

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Gama Save(@RequestBody Gama gama){
        return gamaservice.save(gama);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Gama update(@RequestBody  Gama gama){
        return gamaservice.update(gama);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable int id){
        return gamaservice.delete(id);
    }
}
