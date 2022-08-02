import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import API_Key from "../key";
import HomeScreen from "../screens/HomeScreen";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

export default function Index({ navigation }) {
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
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      await fetchWeatherData({
        latitude: location["coords"]["latitude"],
        longitude: location["coords"]["longitude"],
      });
      // console.log(weatherData);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    // console.log("hey");
  }
  if (!loaded) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#0d0d0d",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View style={{ flex: 3, justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 40, marginBottom: 20, color: "#EC6E4C" }}>
            Simple Weather
          </Text>
          <ActivityIndicator color="#EC6E4C" size={36} />
        </View>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text style={{ color: "gray" }}>By Aryan Soni</Text>
        </View>
      </View>
    );
  } else if (weatherData == null) {
    return (
      <View>
        <Text>Data not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HomeScreen data={weatherData} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 25,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 20,
            height: 60,
            width: "95%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 25,
            backgroundColor: "rgba(128,128,128,0.3)",
          }}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={{ color: "#fff" }}>Search the city</Text>
          <FontAwesome name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
});
