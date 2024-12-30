import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Pg4cmp4 = () => {
  return (
    <View style={style.div}>
      <View style={style.cmp}>
        <Text style={style.Text}>Don't water when the chance of rain is higher than:</Text>
        <View style={style.percent}>
          <Text style={[style.percentage, style.activePercentage]}>20% </Text>
          <Text style={[style.percentage,style.activePercentage]}>40% </Text>
          <Text style={style.percentage}>60% </Text>
          <Text style={style.percentage}>80% </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  div: {
    marginTop:-30,
    backgroundColor: '#1E201F',
    height: 250,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  cmp: {
    width: 350,
    backgroundColor: '#343636',
    borderRadius: 10,
    padding: 15,
  },
  Text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  percent: {
    flexDirection: 'row',
    // justifyContent: 'space-between', // Distribute percentage boxes
    padding: 5,
    backgroundColor: '#3D3D3D',
    borderRadius: 5,
   
  },
  percentage: {
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#2C2C2C',
    textAlign: 'center',
    marginRight:5
  },
  activePercentage: {
    backgroundColor: '#007AFF', // Blue color for the active percentage
  },
});

export default Pg4cmp4;
