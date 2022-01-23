//MOSHI

package com.vedur.vedurbackend;

public class Location {
    private String name;
    private String country;
    private String localtime;

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getCountry(){
        return this.country;
    }

    public void setCountry(String country){
        this.country = country;
    }

    public String getLocaltime(){
        return this.localtime;
    }

    public void setLocaltime(String localtime){
        this.localtime = localtime;
    }
}
