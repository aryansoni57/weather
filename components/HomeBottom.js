import { Image, ScrollView, Text, View } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const HomeBottom = ({ data }) => {
  return (
    <View style={{ flex: 2 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#191919",
          // borderTopLeftRadius: 40,
          // borderTopRightRadius: 40,
          borderRadius: 40,
          paddingHorizontal: 30,
          margin: 15,
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-water-outline" size={24} color="#EC6E4C" />
            <Text style={{ fontWeight: "900", color: "#fff", marginTop: 10 }}>
              {data["main"]["humidity"]} %
            </Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>Humidity</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="wind" size={24} color="#EC6E4C" />
            <Text style={{ fontWeight: "900", color: "#fff", marginTop: 10 }}>
              {data["wind"]["speed"]} kmh
            </Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>Wind</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="eye" size={24} color="#EC6E4C" />
            <Text style={{ fontWeight: "900", color: "#fff", marginTop: 10 }}>
              {(data["visibility"] - 0) / 1000} Km
            </Text>
            <Text style={{ fontWeight: "100", color: "gray" }}>Visibility</Text>
          </View>
        </View>
        {/* line */}
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "80%", height: 1, backgroundColor: "gray" }} />
        </View>
        {/* 2nd row */}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="temperature-low" size={24} color="#EC6E4C" />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontWeight: "900", color: "#fff" }}>
                {(data["main"]["temp_min"] - 273).toFixed(0)}
              </Text>
              <Text style={{ color: "#EC6E4C" }}>°C</Text>
            </View>
            <Text style={{ fontWeight: "100", color: "gray" }}>Temp min</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <FontAwesome name="thermometer-2" size={24} color="#EC6E4C" />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontWeight: "900", color: "#fff" }}>
                {(data["main"]["feels_like"] - 273).toFixed(0)}
              </Text>
              <Text style={{ color: "#EC6E4C" }}>°C</Text>
            </View>
            <Text style={{ fontWeight: "100", color: "gray" }}>Feels like</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="temperature-high" size={24} color="#EC6E4C" />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontWeight: "900", color: "#fff" }}>
                {(data["main"]["temp_max"] - 273).toFixed(0)}
              </Text>
              <Text style={{ color: "#EC6E4C" }}>°C</Text>
            </View>
            <Text style={{ fontWeight: "100", color: "gray" }}>Temp max</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeBottom;
