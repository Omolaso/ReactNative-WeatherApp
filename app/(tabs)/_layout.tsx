import NavigationTabs from "@/components/NavigationTabs";
import { useGetWeather } from "@/hooks/useGetWeather";
import Loader from "@/utils/Loader";

export default function TabLayout() {
  const { weatherData, isLoading, error } = useGetWeather();

  if (isLoading) return <Loader />;

  if (error) {
    console.log("error -", error);
  }
  return <NavigationTabs weatherData={weatherData} />;
}
