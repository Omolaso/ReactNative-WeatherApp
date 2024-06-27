import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { axiosFetcher } from "@/hooks/useDataFetcher";
import { WeatherProps } from "@/types/weather";
import { ICoord } from "@/types/coords";

const projectAPIKEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY as string;

export const useGetWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [location, setLocation] = useState<ICoord>({
    latitude: "",
    longitude: "",
  });
  const [dataState, setDataState] = useState({
    isLoading: true,
    error: false,
  });

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation((prevLocation) => ({
      ...prevLocation,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }));
  };

  const getData = async () => {
    try {
      const res = await axiosFetcher.get(
        `/forecast?lat=${location?.latitude}&lon=${location?.longitude}&appid=${projectAPIKEY}`
      );

      const data = await res.data;
      setWeatherData(data);
    } catch (err) {
      console.log(err);
      setDataState((prevDataState) => ({
        ...prevDataState,
        error: true,
      }));
    } finally {
      setDataState((prevDataState) => ({
        ...prevDataState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    getLocation();
    getData();
  }, [location?.latitude, location?.longitude]);

  return {
    weatherData,
    isLoading: dataState.isLoading,
    error: dataState.error,
  };
};
