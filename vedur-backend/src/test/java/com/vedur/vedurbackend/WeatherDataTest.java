//MOSHI

package com.vedur.vedurbackend;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class WeatherDataTest {
	private WeatherData weatherData;
	private Location location;
    private Current current;

	@BeforeEach
	void setup() {
		weatherData = new WeatherData();
		weatherData.setLocation(location);
		weatherData.setCurrent(current);

	}

	@Test
	void testWeatherData() {
		Assertions.assertEquals(weatherData.getLocation(), location);
		Assertions.assertEquals(weatherData.getCurrent(), current);
	}

}
