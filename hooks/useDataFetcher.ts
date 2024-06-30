import useSWR from "swr";
import axios from "axios";

const projectBaseUrl = process.env.EXPO_PUBLIC_BASE_URL as string;

export const axiosFetcher = axios.create({
  baseURL: encodeURI(projectBaseUrl),
});

export const fetcher = (url: string) =>
  axiosFetcher.get(url).then((res) => res.data);

export const useFetcher = <T>(path: string) => {
  const { data, error, isLoading } = useSWR<T>(path, fetcher, {
    refreshInterval: 2000,
  });

  return {
    data,
    isLoading,
    error,
  };
};
