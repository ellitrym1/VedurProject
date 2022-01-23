//RASHAD

package com.vedur.vedurbackend;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class ConditionsTest {
    private Condition condition;
    private Condition condition2;

    @BeforeEach
    void setup(){
        condition = new Condition();
        condition.setText("windy");
        condition.setIcon("windy-icon.png");

        condition2 = new Condition();
        condition2.setText("sunny");
        condition2.setIcon("sunny-icon.png");
    }

    @Test
    @DisplayName("Testing to see if the text-conditions match")
    void testConditionText(){
        Assertions.assertEquals(condition.getText(), "windy");
        Assertions.assertEquals(condition2.getText(), "sunny");
    }
    
    @Test
    @DisplayName("Testing to see if the icon-conditions match")
    void testConditionIcon(){
        Assertions.assertEquals(condition.getIcon(), "windy-icon.png");
        Assertions.assertEquals(condition2.getIcon(), "sunny-icon.png");
    }
}