import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai/react";
import React from "react";
import api from "../utils/api";
import { pokeColorsAtom } from "../utils/atoms";

const PokemonCard = ({ id }: { id: number }) => {
  const pokemonDataQuery = useQuery({
    queryKey: ["pokemon_data", id],
    queryFn: async () => {
      return await api.get(`/pokemon/${id}`).then((res) => res.data);
    },
  });

  const [color, setColors] = useAtom(pokeColorsAtom);

  console.log(pokemonDataQuery.data);
  return (
    <div
      className="bg-[url('./pokeball.svg')] rounded-lg shadow-lg p-4 bg-no-repeat bg-contain bg-left-top"
      style={{
        // @ts-ignore
        // TODO: Typing this properly
        backgroundColor: color[pokemonDataQuery.data?.types[0].type.name],
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={
              pokemonDataQuery.data?.sprites.other["official-artwork"]
                .front_default
            }
            className="w-14"
          />
          <h1 className="text-2xl font-semibold">
            {pokemonDataQuery.data?.name}
          </h1>
        </div>
        <div className="flex gap-2">
          {pokemonDataQuery.data?.types.map((type: any) => (
            <span
              key={type.type.name}
              className="text-white text-xs font-semibold bg-gray-500 rounded-lg px-2 py-1 capitalize"
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
