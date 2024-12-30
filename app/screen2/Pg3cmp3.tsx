import { View, Text } from 'react-native'
import React ,{useState}from 'react'
import { StyleSheet,Switch } from 'react-native'
const Pg3cmp3 = () => {
      const [isEnabled, setIsEnabled] = useState(false); 
      const toggleSwitch = () => setIsEnabled((prevState) => !prevState);
      return (
    <View style={style.div}>
    <View style={style.twocolumn}>
<View style={style.col1}>
<Text style={style.col1Text1}>Use forcast temperature to predict smart watering </Text>
  <Switch style={style.switch}
            value={isEnabled} 
            onValueChange={toggleSwitch} 
            trackColor={{ false: '#808080', true: 'orange' }}
            thumbColor="#ffffff"
          />
</View>
<View style={style.col2}>

<Text style={style.col1Text1}>
Water 25% less when today's forecast temp is lower than 21C</Text>
  <Switch style={style.switch}
            value={isEnabled} 
            onValueChange={toggleSwitch} 
            trackColor={{ false: '#808080', true: 'orange' }}
            thumbColor="#ffffff"
          />
</View>

   </View>
    </View>
  )
}
const style = StyleSheet.create({
  div: {
    backgroundColor: '#1E201F',
    height: 280,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
twocolumn:{
    flexDirection:'row'

},
col1:{
    height:230,
    width:170,
    backgroundColor:'#343636',
    borderRadius:20,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center'
},
col1Text1:{
fontSize:20,
color:'white',
marginLeft:10,
marginBottom:50
},
col2:{
    height:230,
    width:170,
    backgroundColor:'#FF613B',
    marginLeft:15,
    borderRadius:20,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center'

},switch:{
marginLeft:10,

}
})

export default Pg3cmp3