//RASHAD

package com.vedur.vedurbackend.controllers;

import com.vedur.vedurbackend.WeatherData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
public class ApiController {

    @Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping("/v1/weather")
    public WeatherData getWeatherData(String location){
        WeatherData data = webClientBuilder.build()
                .get()
                .uri(uriBuilder -> uriBuilder
                        .path("api.weatherapi.com/v1/current.json")
                        .queryParam("key", "6d05147638f940f4a1c193240212102")
                        .queryParam("q", location)
                        .build())
                .retrieve()
                .bodyToMono(WeatherData.class).log()
                .block();
//        if(data != null){
//            System.out.println(data.getLocation().getName());
//            System.out.println(data.getCurrent().getTemp_c());
//        }
        return data;
    }
}