package com.example.reto5.Service;

import com.example.reto5.Model.Gama;
import com.example.reto5.Repository.GamaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GamaService {
    @Autowired
    private GamaRepository gamaRepository;
    public List<Gama> getAll(){
        return gamaRepository.findAll();
    }
    public Optional<Gama> getGama(int id){
        return gamaRepository.getGama(id);
    }
    public Gama save(Gama gama){
        if(gama.getIdGama()==null){
            return gamaRepository.save(gama);
        }else{
            Optional<Gama> gamaEncontrada = getGama(gama.getIdGama());
            if(gamaEncontrada.isEmpty()){
                return gamaRepository.save(gama);
            }else{
                return gama;
            }
        }
    }
    public Gama update(Gama gama){
        if(gama.getIdGama()!=null){
            Optional<Gama> gamaEncontrada = getGama(gama.getIdGama());
            if(gamaEncontrada.isPresent()){
                if(gama.getName()!=null){
                    gamaEncontrada.get().setName(gama.getName());
                }
                if(gama.getDescription()!=null){
                    gamaEncontrada.get().setDescription(gama.getDescription());
                }
                return gamaRepository.save(gamaEncontrada.get());
            }else{
                return gama;
            }
        }else{
            return gama;
        }
    }
    public boolean delete(int id){
        Boolean respuesta = getGama(id).map(gama -> {
            gamaRepository.delete(gama);
            return true;
        }).orElse(false);
        return respuesta;
    }
}
