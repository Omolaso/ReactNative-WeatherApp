import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.appContainer}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feel}>Feels like 5</Text>

        <View style={styles.highLowContainer}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Wear a light shirt</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "pink" },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 48,
    color: "black",
  },
  feel: {
    fontSize: 30,
    color: "black",
  },
  highLowContainer: {
    flexDirection: "row",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },

  descriptionContainer: {
    alignItems: "flex-start",
    padding: 25,
  },
  description: {
    fontSize: 30,
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;
