import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai/react";
import React from "react";
import api from "../utils/api";
import { pokeColorsAtom, pokeColorsGradientAtom } from "../utils/atoms";

const PokemonCard = ({ id }: { id: number }) => {
  const pokemonDataQuery = useQuery({
    queryKey: ["pokemon_data", id],
    queryFn: async () => {
      return await api.get(`/pokemon/${id}`).then((res) => res.data);
    },
  });

  const [color, setColors] = useAtom(pokeColorsAtom);

  console.log(color);

  return (
    <div
      className="rounded-lg shadow-lg px-6 py-4 cursor-pointer"
      style={{
        // @ts-ignore
        // TODO: Typing this properly
        backgroundColor: color[pokemonDataQuery.data?.types[0].type.name],
      }}
    >
      <div className="flex flex-col gap-3 items-center">
        <img
          src={
            pokemonDataQuery.data?.sprites.other["official-artwork"]
              .front_default
          }
          className="w-32 bg-white p-2 rounded-full"
        />

        <div className="flex flex-col items-center gap-1">
          <span className="bg-gray-800/30 rounded-lg text-white text-sm px-2 py-1">
            #{pokemonDataQuery.data?.id}
          </span>
          <h2 className="text-white text-2xl font-semibold capitalize">
            {pokemonDataQuery.data?.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
