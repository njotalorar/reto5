package com.example.reto5.Controller;

import com.example.reto5.Model.Reservation;
import com.example.reto5.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*") //acepte todas las peticiones entrantes
@RequestMapping("/api/Reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    @GetMapping( "/all")  //
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }

    @GetMapping( "/{id}")
    public Optional<Reservation> getReservation(@PathVariable int id){
        return reservationService.getReservation(id);
    }
    @PostMapping( "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation Save(@RequestBody Reservation reservation){
        return reservationService.save(reservation);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation reservation){
        return reservationService.update(reservation);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable int id){
        return reservationService.delete(id);
    }
}
