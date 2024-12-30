import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
const Component3 = () => {
  return (
    <View style={style.content}>
      
        <View style={style.horizontalLine} />
    </View>
  )
}
const style=StyleSheet.create({
    horizontalLine: {
        width: '50%', 
        height: 1,    
        backgroundColor: 'grey',
        marginVertical: 10, 
     
      },
      content:{
        alignItems:'center',
        marginTop:10
      }
    
})

export default Component3