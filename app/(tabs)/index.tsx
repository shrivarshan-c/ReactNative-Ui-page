import { Link, Tabs } from "expo-router";
import { Component } from "react";
import { Text, View } from "react-native";
import Component1 from "../screen1/Component1";
import Component2 from "../screen1/Component2";
import Component3 from "../screen1/Component3";
import Component4 from "../screen1/Component4";
import Component5 from "../screen1/Component5";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: '#fbfcf8',
        flexDirection: 'column',
        flex: 1,  
      }}
    >
      <Component1 />
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
    
    </View>
  );
}
