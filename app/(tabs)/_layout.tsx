import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import NavigationTabs from "@/components/NavigationTabs";
import CurrentWeather from "@/screens/CurrentWeather";

export default function TabLayout() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <NavigationTabs />;
}
