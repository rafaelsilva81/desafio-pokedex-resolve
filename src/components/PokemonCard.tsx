import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../utils/api";

const PokemonCard = ({ id }: { id: number }) => {
  const pokemonDataQuery = useQuery({
    queryKey: ["pokemon_data", id],
    queryFn: async () => {
      return await api.get(`/pokemon/${id}`).then((res) => res.data);
    },
  });

  console.log(pokemonDataQuery.data);
  return <div>PokemonCard</div>;
};

export default PokemonCard;
