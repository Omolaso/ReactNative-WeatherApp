import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconText from "@/components/IconText";

const City = () => {
  const {
    container,
    cityText,
    cityBackground,
    cityName,
    countryName,
    totalPeople,
    riseSet,
    populationContainer,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("@/assets/images/weather-image/city-bg.jpg")}
        style={cityBackground}
      >
        <Text style={[cityText, cityName]}>Lagos</Text>
        <Text style={[cityText, countryName]}>Nigeria</Text>

        <View style={[totalPeople, populationContainer]}>
          <IconText
            textValue={"8000"}
            iconName={"user"}
            size={24}
            color={"white"}
          />
        </View>

        <View style={[riseSet, populationContainer]}>
          <IconText
            textValue={"10:30:00"}
            iconName={"sunrise"}
            size={30}
            color={"white"}
          />
          <IconText
            textValue={"19:32:21"}
            iconName={"sunset"}
            size={30}
            color={"white"}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d6c8b",
    marginTop: StatusBar.currentHeight || 0,
  },
  cityBackground: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  cityText: {
    color: "white",
    textAlign: "center",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  totalPeople: {
    marginTop: 30,
  },
  riseSet: {
    justifyContent: "space-between",
    marginTop: 30,
  },
  populationContainer: {
    flexDirection: "row",
    gap: 4,
  },
  populationText: {
    fontSize: 20,
  },
});
export default City;
