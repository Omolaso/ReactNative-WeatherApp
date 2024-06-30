import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { WeatherContext } from "@/app/(tabs)/_layout";
import { weatherTypes, IWeatherType } from "@/utils/WeatherTypes";

type TextProps = {
  weather: IWeatherType;
  value: string;
};

const WeatherText = ({ weather, value }: TextProps) => {
  return (
    <Text
      style={[styles.highLow, { fontSize: 20, color: String(weather?.color) }]}
    >
      {value}
    </Text>
  );
};

const CurrentWeather = () => {
  const [weather, setWeather] = useState<IWeatherType | null>(null);
  const weatherData = useContext(WeatherContext);

  const currentWeather = weatherData?.list && weatherData?.list[0].main;

  const weatherDescription =
    weatherData?.list &&
    weatherData?.list[0]?.weather &&
    weatherData?.list[0]?.weather[0]?.description;

  const currentWeatherType =
    weatherData?.list &&
    weatherData?.list[0]?.weather &&
    weatherData?.list[0]?.weather[0]?.main;

  useEffect(() => {
    weatherTypes.find((item: IWeatherType) => {
      if (item.weather === currentWeatherType) {
        setWeather(item);
      }
    });
  }, [currentWeatherType]);

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: `${weather?.backgroundColor}` },
      ]}
    >
      <View style={styles.appContainer}>
        <Feather name={weather?.icon} size={100} color={weather?.color} />
        <Text
          style={[styles.temp, { color: String(weather?.color) }]}
        >{`${currentWeather?.temp}°`}</Text>
        <Text
          style={[styles.feel, { color: String(weather?.color) }]}
        >{`Feels like ${currentWeather?.feels_like}°`}</Text>

        <View style={styles.highLowContainer}>
          <WeatherText
            value={`High: ${currentWeather?.temp_max}°`}
            weather={weather as IWeatherType}
          />
          <WeatherText
            value={`Low: ${currentWeather?.temp_min}°`}
            weather={weather as IWeatherType}
          />
          <WeatherText
            value={`Pressure: ${currentWeather?.pressure}atm`}
            weather={weather as IWeatherType}
          />
          <WeatherText
            value={`Sea Level: ${currentWeather?.sea_level}m`}
            weather={weather as IWeatherType}
          />
          <WeatherText
            value={`Humidity: ${currentWeather?.humidity}%`}
            weather={weather as IWeatherType}
          />
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, { color: String(weather?.color) }]}>
          {weatherDescription?.toUpperCase()}
        </Text>
        <WeatherText
          value={weather?.message as string}
          weather={weather as IWeatherType}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  temp: {
    fontSize: 48,
  },
  feel: {
    fontSize: 30,
  },
  highLowContainer: {
    flexDirection: "column",
    gap: 4,
  },
  highLow: {
    fontSize: 20,
  },

  descriptionContainer: {
    alignItems: "center",
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
