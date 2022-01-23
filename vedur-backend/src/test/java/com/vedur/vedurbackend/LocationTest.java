//MOSHI

package com.vedur.vedurbackend;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class LocationTest {

	private Location location;

	@BeforeEach
	void setup() {
		location = new Location();
		location.setName("Dublin");
		location.setCountry("Ireland");
		location.setLocaltime("Time");
	}
	
	@Test
	void testLocation() {
		Assertions.assertEquals(location.getName(),"Dublin");
		Assertions.assertEquals(location.getCountry(),"Ireland");
		Assertions.assertEquals(location.getLocaltime(),"Time");
	}

}
