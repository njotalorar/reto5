package com.example.reto5.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="gama")
public class Gama {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idGama;
    private String name;
    private String description;
    //Relacion con los carros
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy= "gama")
    @JsonIgnoreProperties("gama")
    private List<Car> cars;
    public Integer getIdGama() {
        return idGama;
    }

    public void setIdGama(Integer idGama) {
        this.idGama = idGama;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
}
