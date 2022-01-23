package com.vedur.vedurbackend;

public class WeatherData {
    private Location location;
    private Current current;

    public Location getLocation(){
        return this.location;
    }

    public void setLocation(Location location){
        this.location = location;
    }

    public Current getCurrent(){
        return this.current;
    }

    public void setCurrent(Current current){
        this.current = current;
    }
}
