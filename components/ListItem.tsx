import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { WeatherListProps } from "@/types/weather";
import { weatherTypes, IWeatherType } from "@/utils/WeatherTypes";

const ListItem = ({ prop }: { prop: WeatherListProps }) => {
  const [weatherType, setWeatherType] = useState<IWeatherType | null>(null);

  const { dt_txt, main, weather } = prop;

  const currentWeatherType = weather && weather[0]?.main;

  const { itemView, itemText, dateContainer } = styles;

  useEffect(() => {
    weatherTypes.find((item: IWeatherType) => {
      if (item.weather === currentWeatherType) {
        setWeatherType(item);
      }
    });
  }, [currentWeatherType]);

  return (
    <View style={itemView}>
      <Feather name={weatherType?.icon} size={50} color="white" />

      <View style={dateContainer}>
        <Text style={itemText}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={itemText}>
          {moment(dt_txt).format("MMMM Do YYYY, h:mm:ss a")}
        </Text>
      </View>

      <Text style={itemText}>{`${Math.round(
        main?.temp_min as number
      )}°/${Math.round(main?.temp_max as number)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    minHeight: 25,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginVertical: 6,
    marginHorizontal: 20,
  },
  dateContainer: {
    flexDirection: "column",
    gap: 3,
  },
  itemText: {
    color: "black",
    fontSize: 15,
  },
});

export default ListItem;
