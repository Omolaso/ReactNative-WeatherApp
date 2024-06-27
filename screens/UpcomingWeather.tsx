import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "@/components/ListItem";
import { WeatherContext } from "@/app/(tabs)/_layout";

const UpcomingWeather = () => {
  const weatherData = useContext(WeatherContext);

  const weatherList = weatherData?.list;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/weather-image/upcoming-bg.jpg")}
        style={styles.image}
      >
        <View style={styles.weatherView}>
          <FlatList
            data={weatherList}
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
