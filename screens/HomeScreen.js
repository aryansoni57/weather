import { Text, View } from "react-native";
import HomeBottom from "../components/HomeBottom";
import HomeTop from "../components/HomeTop";
import Bubble from "./Bubble";

const HomeScreen = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      <Bubble>
        <HomeTop data={data} />
        <HomeBottom data={data} />
      </Bubble>
    </View>
  );
};

export default HomeScreen;
