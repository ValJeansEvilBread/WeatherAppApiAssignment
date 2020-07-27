package com.tts.WeatherAppApiAssignment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.tts.WeatherAppApiAssignment.Response;
import com.tts.WeatherAppApiAssignment.ZipCode;
import com.tts.WeatherAppApiAssignment.ZipCodeRepository;

@Service
public class WeatherService {
	
    @Autowired
    private ZipCodeRepository zipCodeRepository;
    
    @Value("${api_key}")
    private String apiKey;
    
    public Response getForecast(String zipCode) {
        String url = "http://api.openweathermap.org/data/2.5/weather?zip=" + 
            zipCode + "&units=imperial&appid=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        try {
            return restTemplate.getForObject(url, Response.class);
        }
        catch (HttpClientErrorException ex) {
            Response response = new Response();
            response.setName("error");
            return response;
        }
    }
    
    public void save(ZipCode zip) {
        zipCodeRepository.save(zip);
    }
    
    public List<ZipCode> findLastTen() {
    	List<ZipCode> zipCodesList = zipCodeRepository.findAllByOrderByIdDesc();
    	List<ZipCode> lastTenSearches = zipCodesList.subList(0, 10);
    	return lastTenSearches;
    }


    



    
}