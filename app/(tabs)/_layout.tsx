import React, { createContext } from "react";
import { useGetWeather } from "@/hooks/useGetWeather";
import { WeatherProps } from "@/types/weather";
import NavigationTabs from "@/components/NavigationTabs";
import Loader from "@/utils/Loader";

export const WeatherContext = createContext<WeatherProps | null>(null);

export default function TabLayout() {
  const { weatherData, isLoading, error } = useGetWeather();

  if (isLoading) return <Loader />;

  if (error) {
    console.log("error -", error);
  }
  return (
    <WeatherContext.Provider value={weatherData}>
      <NavigationTabs />
    </WeatherContext.Provider>
  );
}
