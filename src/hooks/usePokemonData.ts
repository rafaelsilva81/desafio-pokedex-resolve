import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const usePokemonData = (id: number) =>
  useQuery({
    queryKey: ["pokemon_data", id],
    queryFn: async () => {
      const data = await api.get(`/pokemon/${id}`).then((res) => res.data);
      return data;
    },
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60 * 24 * 30, // 30 days
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

export default usePokemonData;
