package com.tts.WeatherAppApiAssignment;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tts.WeatherAppApiAssignment.ZipCode;

@Repository
public interface ZipCodeRepository extends CrudRepository<ZipCode, Long>  {
	List<ZipCode> findAllByOrderByIdDesc();

}
