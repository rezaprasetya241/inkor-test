import { Collection } from "../../helper/types/Collection";
import axiosInstance from "../api";
import { useQuery } from "@tanstack/react-query";

const api = axiosInstance;
export const useCollections = () => {
  return useQuery<Collection[], Error>({
    queryKey: ["collections"],
    queryFn: () =>
      api.get("/collections").then((res) => {
        return res.data.collections;
      }),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
