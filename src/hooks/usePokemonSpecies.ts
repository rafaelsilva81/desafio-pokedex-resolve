import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const usePokemonSpecies = (id: number) =>
  useQuery({
    queryKey: ["species", id],
    queryFn: async () => {
      const data = await api
        .get(`/pokemon-species/${id}`)
        .then((res) => res.data);
      return data;
    },
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60 * 24 * 30, // 30 days
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

export default usePokemonSpecies;
