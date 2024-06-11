import React from "react";
import { WeatherListProps } from "@/types/weather";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "@/components/ListItem";

const renderedData: WeatherListProps[] = [
  {
    dt_txt: "2022-09-03 15:00:00",
    dt: 1662217200,
  },
  {
    dt_txt: "2022-08-30 16:00:00",
    dt: 1661875200,
  },
  {
    dt_txt: "2022-08-30 17:00:00",
    dt: 1661878800,
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    dt: 1661882400,
  },
];

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/weather-image/upcoming-bg.jpg")}
        style={styles.image}
      >
        <View style={styles.weatherView}>
          <Text style={styles.text}>UpcomingWeather</Text>
          <FlatList
            data={renderedData}
            renderItem={({ item }) => <ListItem prop={item} />}
            keyExtractor={(item) => item.dt_txt as string}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  weatherView: {
    flex: 1,
  },

  text: {
    color: "black",
  },
});

export default UpcomingWeather;
