//RASHAD

package com.vedur.vedurbackend;

public class Condition {
    private String text;
    private String icon;

//    public Condition(String text, String icon) {
//		this.text = text;
//		this.icon = icon;
//	}
//
//    public Condition() {
//
//	}

    public String getText(){
        return this.text;
    }

    public void setText(String text){
        this.text = text;
    }

    public String getIcon(){
        return this.icon;
    }

    public void setIcon(String icon){
        this.icon = icon;
    }
}
