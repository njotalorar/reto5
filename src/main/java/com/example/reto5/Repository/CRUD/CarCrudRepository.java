package com.example.reto5.Repository.CRUD;

import com.example.reto5.Model.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarCrudRepository extends CrudRepository<Car, Integer> {
}
