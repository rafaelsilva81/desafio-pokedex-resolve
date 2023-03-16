import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const usePokemonData = (id: number) =>
  useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      return await api.get(`/pokemon/${id}`).then((res) => res.data);
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export default usePokemonData;
