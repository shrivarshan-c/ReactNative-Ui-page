import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const tabs = () => {
 
  
  return (
    
    <Tabs 
    
    screenOptions={
        {
            tabBarShowLabel:true,
            headerShown: false,
        tabBarStyle:{
         
            backgroundColor:'white',
            position:'absolute',
            minHeight:60,
            borderTopWidth:3,
          
          


        }
        }
    }>
   
    </Tabs>
  )
}

export default tabs