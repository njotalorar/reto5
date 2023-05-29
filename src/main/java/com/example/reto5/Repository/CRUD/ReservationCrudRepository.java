package com.example.reto5.Repository.CRUD;

import com.example.reto5.Model.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {
}
