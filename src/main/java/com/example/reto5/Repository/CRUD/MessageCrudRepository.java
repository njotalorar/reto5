package com.example.reto5.Repository.CRUD;

import com.example.reto5.Model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}
