import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const Component5 = () => {
  return (
    <View  style={style.comp5}>
      <Image style={style.imageDiv} source={require('../../assets/images/home.png')}/>
      <Image style={style.imageDiv} source={require('../../assets/images/search.png')}/>
      <Image style={style.imageDiv} source={require('../../assets/images/rain.png')}/>
      <Image style={style.imageDiv} source={require('../../assets/images/user.png')}/>
    </View>
  )
}

const style=StyleSheet.create({

    comp5:{
        height:70,
        width:330,
        marginLeft:27,
        marginTop:30,
        padding:5,

        backgroundColor:'#1F2D3B',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    imageDiv:{
        marginTop:15,
        height:30,
        width:30
    }
})
export default Component5