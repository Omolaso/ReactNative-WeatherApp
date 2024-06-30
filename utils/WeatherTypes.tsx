import { Feather } from "@expo/vector-icons";

export interface IWeatherType {
  weather: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  color: React.ComponentProps<typeof Feather>["color"] | string;
  message: string;
  backgroundColor: string;
}

export const weatherTypes: IWeatherType[] = [
  {
    weather: "Thunderstorm",
    icon: "zap",
    message: "It could get noisy",
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  {
    weather: "Drizzle",
    icon: "cloud-rain",
    message: "It might rain a little",
    backgroundColor: "#36454f",
    color: "#ffffff",
  },
  {
    weather: "Rain",
    icon: "umbrella",
    message: "You'll need an umbrella",
    backgroundColor: "#0000ff",
    color: "#ffaa00",
  },
  {
    weather: "Snow",
    icon: "cloud-snow",
    message: "Lets build a snowman",
    backgroundColor: "#7f6065",
    color: "#efe6e6",
  },
  {
    weather: "Clear",
    icon: "sun",
    message: "It is perfect t-shirt weather",
    backgroundColor: "#e47200",
    color: "#ffffff",
  },
  {
    weather: "Clouds",
    icon: "cloud",
    message: "You could live in the cloud",
    backgroundColor: "#363636",
    color: "#ffffff",
  },
  {
    weather: "Haze",
    icon: "wind",
    message: "It might be a bit damp",
    backgroundColor: "#58586e",
    color: "#ffaa00",
  },
  {
    weather: "Mist",
    icon: "align-justify",
    message: "It might be hard to see",
    backgroundColor: "#3e3e37",
    color: "#ffffff",
  },
];
