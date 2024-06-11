import React from "react";
import { OpaqueColorValue, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface IconTextProps {
  textValue: string;
  iconName: React.ComponentProps<typeof Feather>["name"];
  size: number;
  color: string | OpaqueColorValue;
}

const IconText = (props: IconTextProps) => {
  const { iconTextStyle, populationText, cityText } = styles;

  return (
    <View style={iconTextStyle}>
      <Feather name={props.iconName} size={props.size} color={props.color} />
      <Text style={[cityText, populationText]}>{props.textValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  populationContainer: {
    flexDirection: "row",
    gap: 4,
  },
  populationText: {
    fontSize: 20,
  },
  iconTextStyle: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  cityText: {
    color: "white",
  },
});

export default IconText;
