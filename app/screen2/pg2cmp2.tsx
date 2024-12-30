import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

const Pg2cmp2 = () => {
  const [isEnabled, setIsEnabled] = useState(true); // Default ON
  const [temperature, setTemperature] = useState(15); // Default temperature

  const toggleSwitch = () => setIsEnabled((prevState) => !prevState); // Toggle switch
  const increaseTemp = () => setTemperature((prevTemp) => prevTemp + 1); // Increment temp
  const decreaseTemp = () => setTemperature((prevTemp) => (prevTemp > 0 ? prevTemp - 1 : 0)); // Decrement temp

  return (
    <View style={style.div}>
      <View style={style.silver}>
        <View style={style.text1}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Don't water when today's forecast temperature is lower than
          </Text>
        </View>
        <View style={style.switchRow}>
          <Switch
            value={isEnabled} // Current state
            onValueChange={toggleSwitch} // Change state
            trackColor={{ false: '#808080', true: 'orange' }}
            thumbColor="#ffffff"
          />
        </View>
        <View style={style.tempControl}>
          <Text style={style.tempText}>{temperature}°C</Text>
          <View style={style.buttons}>
            <TouchableOpacity onPress={increaseTemp} style={style.button}>

              <Text style={style.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decreaseTemp} style={style.button}>
              <Text style={style.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  div: {
    backgroundColor: '#1E201F',
    height: 170,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  silver: {
    height: 130,
    width: 350,
    backgroundColor: '#343636',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  text1: {
    width: 290,
    paddingBottom: 10,
  },
  switchRow: {
    alignItems: 'flex-end',
    marginTop: -70,
  },
  tempControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  tempText: {
    color: 'white',
    fontSize: 39,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row', // Ensures buttons are side-by-side
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5A6572',
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Pg2cmp2;
