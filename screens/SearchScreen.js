import { View, Text, TextInput, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import API_Key from "../key";

const SearchScreen = ({ navigation }) => {
  const [results, updateResults] = useState([]);
  const [locationData, setLocationData] = useState(null);
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  async function fetchWeatherData({ latitude, longitude }) {
    setLoaded(false);
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}`;
    try {
      const resp = await fetch(api);
      if (resp.status == 200) {
        const data = await resp.json();
        setWeatherData(data);

        navigation.navigate("SearchedWeather", { data: data });
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchLoactionData(cityname) {
    // const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}`;
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname},&limit=5&appid=${API_Key}`;
    // console.log(cityname);
    try {
      const resp = await fetch(api);
      if (resp.status == 200) {
        const data = await resp.json();
        setLocationData(data);
        for (let i = 0; i < 5; i++) {
          if (data[i]["state"]) {
            updateResults((results) => [
              ...results,
              <TouchableOpacity
                key={i}
                onPress={() => {
                  fetchWeatherData({
                    latitude: data[i]["lat"],
                    longitude: data[i]["lon"],
                  });
                }}
                style={{ margin: 15 }}
              >
                <Text style={{ fontSize: 20, color: "#fff" }}>
                  {data[i]["name"]} , {data[i]["state"]}
                </Text>
              </TouchableOpacity>,
            ]);
          }
        }
      } else {
        setLocationData(null);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#191919",
          margin: 20,
          // padding: 5,
          borderRadius: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          style={{ margin: 15 }}
          name="arrow-back-outline"
          size={24}
          color="#EC6E4C"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          autoFocus={true}
          style={{ color: "white", flex: 1 }}
          onChangeText={(newText) => setText(newText)}
          onSubmitEditing={() => {
            // console.log(text);
            updateResults([]);
            fetchLoactionData(text);
          }}
        />
        <Ionicons
          style={{ margin: 15 }}
          name="ios-search"
          size={24}
          color="#EC6E4C"
          onPress={() => {
            updateResults([]);
            fetchLoactionData(text);
          }}
        />
      </View>
      {results}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
});
