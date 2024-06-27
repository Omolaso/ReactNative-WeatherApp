import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loader = () => {
  const { loaderContainer } = styles;

  return (
    <View style={loaderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Loader;
