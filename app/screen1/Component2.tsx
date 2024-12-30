import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
const Component2 = () => {
  return (
    <View style={style.row2}>
      <View style={style.columndirection}>
      <Image  style={style.image}source={require('../../assets/images/treeimage1.jpg')}/>
     <Text style={style.imagedes}>Orangery </Text>
      </View>
   
   <View style={style.columndirection}> <Image style={style.image} source={require('../../assets/images/treeimage2.jpg')} />
   <Text style={style.imagedes}>Side Alley </Text></View>
 
 </View>
  )
}

const style=StyleSheet.create({

  row2:{
    height:250,
    backgroundColor:'white',
    position:'relative',
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    height:220,
    width:150,
    marginInline:15,
    borderRadius:10,
    position:'relative'
  },
  columndirection:{
    flexDirection:'column',
    alignItems:'center'
  },
  imagedes:{
    marginTop:10,
    fontSize:18
  },

})

export default Component2