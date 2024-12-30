import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Pg2cmp1 = () => {
  return (
    <View style={style.div}>
      <View style={style.leftarrow}>
        <Image style={style.Image} source={require('../../assets/images/left-arrow.png')} />
      </View>
      <Text style={style.text}>Watering Triggers  </Text>
    </View>
  );
};

const style = StyleSheet.create({
  div: {
    backgroundColor: '#1E201F',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 60,
    flexShrink: 1, 
  },
  Image: {
    height: 30,
    width: 30,
  },
  leftarrow: {
    height: 50,
    width: 50,
    backgroundColor: '#343636',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pg2cmp1;
