import { Image, Text, View } from "react-native";

const HomeTop = ({ data }) => {
  return (
    <View style={{ flex: 3 }}>
      <View
        style={{
          marginLeft: 15,
          height: 150,
          // backgroundColor: "#000",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            paddingTop: 20,
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ color: "#fff" }}>Today</Text>
          <Text style={{ fontSize: 20, color: "#fff" }}>
            {data["name"]} City
          </Text>
        </View>
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: `http://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@4x.png`,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 40, color: "#fff" }}>
              {(data["main"]["temp"] - 273).toFixed(0)}
            </Text>
            <Text style={{ fontSize: 28, color: "#EC6E4C" }}>°C</Text>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <View>
          <Text style={{ color: "#fff" }}>Wind</Text>
          <Text style={{ fontSize: 22, color: "#fff" }}>
            {data["wind"]["speed"]}
          </Text>
        </View>
        <View style={{ width: 1, backgroundColor: "#fff", height: "80%" }} />
        <View>
          <Text style={{ color: "#fff" }}>Temp</Text>
          <Text style={{ fontSize: 22, color: "#fff" }}>
            {(data["main"]["temp"] - 273).toFixed(0)}
          </Text>
        </View>
        <View style={{ width: 1, backgroundColor: "#fff", height: "80%" }} />
        <View>
          <Text style={{ color: "#fff" }}>Humidit</Text>
          <Text style={{ fontSize: 22, color: "#fff" }}>
            {data["main"]["humidity"]}%
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default HomeTop;
//
