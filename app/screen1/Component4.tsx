import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
const Component4 = () => {
  return (
    <View style={style.comp4}>
     <View  style={style.row1}>
        <View style={style.col1}>
            <Text style={style.textdes}>Controller status</Text>
            <Text style={style.textdes2}>ALL zones are ready</Text>

        </View>
        <View  style={style.imagecolor}>
            <Image style={style.tickimage} source={require('../../assets/images/tickimage.png')}/>
        </View>
         </View>
         <View style={style.row2}>
         <View style={style.colu1}>
            <View style={style.row2flex}>
            <Text style={style.textData}>Rain</Text>
            <Text style={style.textData}>Sensor </Text>

            </View>
            <View style={style.orange}>
  <Image style={style.imagediv} source={require('../../assets/images/rain.png')}/>
            </View>
        


          </View>
         
          <View style={style.colu1}>
            <View>
            <Text style={style.textData}>Flow</Text>
            <Text style={style.textData}>Metter </Text>

            </View>
            <View style={style.orange}>
            <Image style={style.imagediv} source={require('../../assets/images/humidity.png')}/>
            </View>
        


          </View>
         
         
         </View>
    </View>
  )
}

const style = StyleSheet.create({
  comp4: {
    height: 175,
    alignItems: 'center',
  },
  imagecolor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 63,
    width: 50,
    borderRadius: 10,
    padding: 4,
    position: 'relative',
  },
  row1: {
    width: 320,
    height: 68,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col1: {
    width: 200,
    height: 62,
    padding: 15,
  },
  textdes: {
    fontSize: 18.6,
  },
  textdes2: {
    color: 'grey',
  },
  tickimage: {
    height: 30,
    width: 30,
  },
  colu1: {
    height: 82,
    width: 152,
    marginRight: 10,
    backgroundColor: 'white',
    flexDirection: 'row', // Aligns content in row
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures text and orange div are spaced apart
    padding: 15,
  },
  row2: {
    flexDirection: 'row',
    padding: 10,
  },
  textData: {
    fontSize: 20,
  },
  orange: {
    height: 63,
    width: 50,
    marginLeft:-50,
    
    backgroundColor: '#DF6454',
    justifyContent:'center',
    borderRadius:8
  },
  row2flex: {
    flexDirection: 'column', // Aligns text in column layout
  },
  imagediv:{

    padding:23,
    height:10,
    width:20
  }
});

export default Component4