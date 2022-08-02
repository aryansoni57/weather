import React from "react";
import { StatusBar, Text, View } from "react-native";
import HomeBottom from "../components/HomeBottom";
import HomeTop from "../components/HomeTop";
import { Ionicons } from "@expo/vector-icons";
import Bubble from "./Bubble";

function SearchedWeather({ route, navigation }) {
  const { data } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0D0D0D",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          backgroundColor: "#EC6E4C",
          alignSelf: "flex-start",
          borderRadius: 100,
          marginHorizontal: 25,
          marginVertical: 10,
        }}
      >
        <Ionicons
          style={{ padding: 10 }}
          name="arrow-back-outline"
          size={24}
          color="#fff"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Bubble>
        <HomeTop data={data} />
        <HomeBottom data={data} />
      </Bubble>
    </View>
  );
}

export default SearchedWeather;
