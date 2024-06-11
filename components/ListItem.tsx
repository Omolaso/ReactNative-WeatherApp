import { WeatherListProps } from "@/types/weather";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = ({ prop }: { prop: WeatherListProps }) => {
  const { itemView, itemText } = styles;

  return (
    <View style={itemView}>
      <Feather name="sun" size={50} color="white" />
      <Text style={itemText}>{prop.dt_txt}</Text>
      <Text style={itemText}>{prop.dt}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minHeight: 25,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginVertical: 6,
    marginHorizontal: 20,
  },
  itemText: {
    color: "black",
  },
});

export default ListItem;
