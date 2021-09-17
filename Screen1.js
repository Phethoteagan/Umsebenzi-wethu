import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Linking } from 'react-native';
import A from 'react-native-a'

class ImageLoader extends Component{
  state={
    opacity:new Animated.Value(0),
  }
  onLoad=()=>{
    Animated.timing(this.state.opacity,{
        toValue:1,
        duration:3500,
        useNativeDriver: true,
    }).start();
  }

  render(){
    return(
      <Animated.Image onLoad={this.onLoad}
      {...this.props} 
      style={[
        {
          opacity:this.state.opacity,
          transform:[
            {
              scale: this.state.opacity.interpolate({
                inputRange:[0, 1],
                outputRange:[0.85, 1],
              })
            }
          ]
        }, this.props.style,
      ]}
      />
    )
  }
}
export default function App() {
 
  return (
    <View style={styles.container}>
      
      <ImageLoader style={styles.image}
      
      source={require('./assets/Logo.jpeg')} />

      <StatusBar style="auto" />

      <TouchableOpacity style={styles.roundedButton}>
        <Text style={styles.text}><A href="./App">Get Started</A></Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:25,
  },
  roundedButton:{
    alignItems:"center",
    paddingVertical:10,
    paddingHorizontal:40,
    backgroundColor:"#55ccee",
    borderRadius:30,
    elevation:2,
    shadowRadius:4.0
  },
  text:{
    color:"black",
    fontWeight:"bold",
    fontSize:20
  },
});
