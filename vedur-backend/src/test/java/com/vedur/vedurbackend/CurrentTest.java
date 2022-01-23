//RASHAD

package com.vedur.vedurbackend;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;


class CurrentTest {
	private Current current;
	 private Condition condition;
	 
	
	@BeforeEach
	void setup() {
		current = new Current();
		current.setTemp_c(15);
		current.setTemp_f(60);
		current.setCondition(condition);
		current.setWind_mph(10.1f);
		current.setWind_kph(16.1f);
		current.setWind_dir("west");
		current.setWind_degree(26);
		current.setPressure_in(30.12f);
		current.setPressure_mb(1020);
		current.setFeelslike_c(20);
		current.setFeelslike_f(68);
		current.setPrecip_in(4.0f);
		current.setPrecip_mm(5.4f);
	}

	
	@Test
	@DisplayName("Testing to see if the temperature in celcius works")
	void testTemp_c() {
		Assertions.assertEquals(current.getTemp_c(), 15);
	}

	@Test
	@DisplayName("Testing to see if the temperature in farenhiet works")
	void testTemp_f() {
		Assertions.assertEquals(current.getTemp_f(), 60);
	}

	@Test
	@DisplayName("Testing to see if the class condition ,getter and setter works")
	void testCondition() {
		Assertions.assertEquals(current.getCondition() ,condition);
	}

	@Test
	@DisplayName("Testing to see if the testwind in mph works")
	void testWind_mph() {
		Assertions.assertEquals(current.getWind_mph() ,10.1f);
	}

	@Test
	@DisplayName("Testing to see if the testwind in kph works")
	void testWind_kph() {
		Assertions.assertEquals(current.getWind_kph() ,16.1f);
	}

	@Test
	@DisplayName("Testing to see if the testwind direction works")
	void testWind_dir() {
		Assertions.assertTrue(current.getWind_dir() =="west");
	}

	@Test
	@DisplayName("Testing to see if the wind degree works")
	void testWind_degree() {
		Assertions.assertTrue(current.getWind_degree() == 26);
	}

	@Test
	@DisplayName("Testing to see if the temp pressure in inches works")
	void testPressure_in() {
		Assertions.assertTrue(current.getPressure_in() == 30.12f);
	}

	@Test
	@DisplayName("Testing to see if the temp pressure in millibars works")
	void testPressure_mb() {
		Assertions.assertEquals(current.getPressure_mb() ,1020);
	}

	@Test
	@DisplayName("Testing to see if the precipitation in inches works")
	void testPrecip_in() {
		Assertions.assertEquals(current.getPrecip_in() ,4.0f);
	}
	@Test
	@DisplayName("Testing to see if the precipitation in mm works")
	void testPrecip_mm() {
		Assertions.assertEquals(current.getPrecip_mm() ,5.4f);
	}

	@Test
	@DisplayName("Testing to see if the feels like in celcius method works")
	void testFeelsLike_c() {
		Assertions.assertEquals(current.getFeelslike_c() ,20);
	}

	@Test
	@DisplayName("Testing to see if the feels like in farenhiet method works")
	void testFeelsLike_f() {
		Assertions.assertTrue(current.getFeelslike_f() == 68);
	}

}
