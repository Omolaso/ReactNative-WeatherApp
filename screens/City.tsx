import React, { useState, useContext } from "react";
import {
  // Alert,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  // TouchableOpacity,
  // Pressable,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import IconText from "@/components/IconText";
import { WeatherContext } from "@/app/(tabs)/_layout";

const City = () => {
  const [inputText, onChangeInputText] = useState<string>("");
  const weatherData = useContext(WeatherContext);

  const currentCity = weatherData?.city;

  const sunriseTime = moment(currentCity?.sunrise as number).format(
    "h:mm:ss a"
  );
  const sunsetTime = moment(currentCity?.sunset as number).format("h:mm:ss a");

  // const {
  //   container,
  //   cityText,
  //   cityBackground,
  //   cityName,
  //   countryName,
  //   totalPeople,
  //   riseSet,
  //   populationContainer,
  //   input,
  // } = styles;

  // const createTwoButtonAlert = () =>
  //   Alert.alert(
  //     "Alert Title",
  //     "My Alert Msg",
  //     [
  //       { text: "OK", onPress: () => console.log("OK Pressed") },
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "destructive",
  //       },
  //       {
  //         text: "Ask me later",
  //         onPress: () => console.log("Ask me later pressed"),
  //       },
  //     ],
  //     {
  //       cancelable: true,
  //     }
  //   );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // <ImageBackground
    //   source={require("@/assets/images/weather-image/city-bg.jpg")}
    //   style={cityBackground}
    // >
    //   <SafeAreaView style={container}>
    //     <Text style={[cityText, cityName]}>{currentCity?.name}</Text>
    //     <Text style={[cityText, countryName]}>{currentCity?.country}</Text>

    //     <View style={[totalPeople, populationContainer]}>
    //       <IconText
    //         textValue={`Population: ${currentCity?.population.toLocaleString()}`}
    //         iconName={"user"}
    //         size={24}
    //         color={"white"}
    //       />
    //     </View>

    //     <View style={[riseSet, populationContainer]}>
    //       <IconText
    //         textValue={`${sunriseTime}`}
    //         iconName={"sunrise"}
    //         size={30}
    //         color={"white"}
    //       />
    //       <IconText
    //         textValue={`${sunsetTime}`}
    //         iconName={"sunset"}
    //         size={30}
    //         color={"white"}
    //       />
    //     </View>

    //     {/* <KeyboardAvoidingView
    //       behavior={Platform.OS === "ios" ? "padding" : "height"}
    //     > */}
    //     <View
    //       style={{
    //         backgroundColor: inputText,
    //         borderBottomColor: "#000000",
    //         borderBottomWidth: 1,
    //       }}
    //     >
    //       <TextInput
    //         editable
    //         multiline
    //         numberOfLines={4}
    //         maxLength={40}
    //         onChangeText={(text) => onChangeInputText(text)}
    //         value={inputText}
    //         style={input}
    //         placeholder="add something"
    //       />
    //     </View>
    //     {/* </KeyboardAvoidingView> */}

    //     {/* <Pressable
    //       onPress={() => createTwoButtonAlert()}
    //       // style={[cityText, cityName]}
    //     >
    //       <Text>Click Me</Text>
    //     </Pressable> */}
    //   </SafeAreaView>
    // </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//   cityBackground: {
//     flex: 1,
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },

//   container: {
//     flex: 1,
//     width: "100%",
//     paddingTop: 50,
//     marginTop: StatusBar.currentHeight || 0,
//   },

//   cityText: {
//     color: "white",
//     textAlign: "center",
//   },
//   cityName: {
//     fontSize: 40,
//   },
//   countryName: {
//     fontSize: 30,
//   },
//   totalPeople: {
//     marginTop: 30,
//   },
//   riseSet: {
//     justifyContent: "space-between",
//     marginTop: 30,
//   },
//   populationContainer: {
//     flexDirection: "row",
//     gap: 4,
//   },
//   populationText: {
//     fontSize: 20,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
export default City;
