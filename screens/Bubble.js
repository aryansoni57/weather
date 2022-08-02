import { View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Bubble = ({ children }) => {
  const circle1 = useRef(new Animated.Value(0)).current;
  const circle2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(circle2, {
            toValue: 2,
            duration: 2500,
            useNativeDriver: true,
          }),
          Animated.timing(circle2, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(circle1, {
            toValue: 2,
            duration: 2500,
            useNativeDriver: true,
          }),
          Animated.timing(circle1, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        // width: "100%",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            height: 200,
            width: 200,
            top: 40,
            left: -10,
            borderRadius: 200,
            backgroundColor: "orange",
            zIndex: 0,
          },
          {
            transform: [
              {
                translateY: circle2.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: [100, 50],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          {
            position: "absolute",
            height: 200,
            width: 200,
            bottom: 120,
            right: -10,
            borderRadius: 200,
            backgroundColor: "orange",
            zIndex: 0,
          },
          {
            transform: [
              {
                translateY: circle1.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: [50, 100],
                }),
              },
            ],
          },
        ]}
      />
      <View
        style={{
          width: "95%",
          backgroundColor: "rgba(128,128,128,0.3)",
          blurRadius: 90,
          flex: 1,
          borderRadius: 25,
          marginHorizontal: "5%",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Bubble;
