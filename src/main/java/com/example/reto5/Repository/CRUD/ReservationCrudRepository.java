package com.example.reto5.Repository.CRUD;

import com.example.reto5.Model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {

    //Reporte 1
    //   SELECT FROM Reservation WHERE startDate AFTER fechaA devolutionDate BEFORE fechaB

    public List<Reservation> findAllByStartDateAfterAndDevolutionDateBefore(Date fechaA, Date fechaB);

    //Reporte 2
         //SELECT FROM Reservation WHERE = status = "valorNecesite"

    public List<Reservation> findAllByStatus(String status);

    //Reporte 3
    //SELECT client, COUNT(client) FROM Reservation GROUP BY client ORDER BY COUNT(client) DESC;
    // Lista de parejas 2 valores!!!
    // [ client, totalCliente]
    /*
       [client2, totalclient2]
       [client3, totalclient3]
       [client4, totalclient4]

     */

    @Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c GROUP BY c.client ORDER BY COUNT(c.client) DESC")
    public List<Object[]>  getTotalReservationsByClient();

    }




