import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Component1 = () => {
  return (
    <View>
      <View style={styles.comp1}>
        {/* Row 1 */}
        <View style={styles.row1}>
          <Text style={styles.wish}>Good Morning,</Text>
          <Text style={styles.wish}>Adriana! </Text>
          <Text style={styles.orangery}>Orangery is irritating</Text>
        </View>

        {/* Row 1 Column 2 */}
        <View style={styles.row1col2}>
          <Image
            style={styles.sunImage}
            source={require('../../assets/images/sun.png')}
          />
          <Text style={styles.temp}>23°C</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comp1: {
    height: 130,
    flexDirection: 'row', // Align children horizontally
  },
  row1: {
    marginTop: 17,
    width: 290,
    height: 100,
    marginLeft: 10,
  },
  wish: {
    fontSize: 40,
  },
  orangery: {
    color: 'grey',
    fontSize: 17,
  },
  row1col2: {
    marginTop: 24,
    height: 105,
    width: 80,
    backgroundColor: 'white',
    marginLeft: -10,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
  },
  sunImage: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },
  temp: {
    fontSize: 20,
    fontWeight: 'bold', 
  },
});

export default Component1;
