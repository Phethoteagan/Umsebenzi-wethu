
import React, { Component } from "react"
import { ScrollView, Animated, SafeAreaView, 
ImageBackground, Dimensions, Image, Text, Linking } from "react-native"
import ImageLoader from "./Screen1";

const url="./Screen1"
const OFFSET = 40
const Component_Width = Dimensions.get("window").width - (OFFSET * 2)
const Component_Height = 200

const slideComponents = [
  { title: "Page 1", posterUrl: require("./assets/Welcome.png") },
  { title: "Page 2", posterUrl: require("./assets/Page2.png") },
  { title: "Page 3", posterUrl: require("./assets/Page3.png") },
  { title: "Page 4", posterUrl: require("./assets/Page4.png") },
  { title: "Page 5", posterUrl: require("./assets/Page5.png") },
  { title: "Page 6", posterUrl: require("./assets/Page6.png") },
  { title: "page 7", posterUrl: require("./assets/Page7.png") },
]

export default function Slider() {
  const scrollX = React.useRef(new Animated.Value(0)).current

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Image source={require("./assets/Logo.jpeg")} style={{marginLeft:-35}}/>
      
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={Component_Width}
        style={{ marginTop: -15, paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={12}
      >
        {slideComponents.map((item, idx) => {
          const inputRange = [
            (idx - 1) * Component_Width,
            idx * Component_Width,
            (idx + 1) * Component_Width,
          ]

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          })
          
          return (
            <Animated.View
              style={{
                width: Component_Width,
                height: Component_Height,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === slideComponents.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <ImageBackground
                source={item.posterUrl}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 20}}
              />
            </Animated.View>
            
          )
        })
        
        }
        
      </ScrollView>
      <Text style={{color:"white", fontSize:25, marginLeft:50, 
      margin:50, borderStyle:"solid", borderRadius: 30, backgroundColor:"#55CCEE", 
      paddingLeft:130, paddingTop: 10, paddingBottom:10}}>Skip</Text>
    </SafeAreaView>
    
   
  )
}