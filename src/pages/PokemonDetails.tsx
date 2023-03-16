import React from "react";
import { useAtom } from "jotai";
import { Navigate, useParams } from "react-router-dom";
import usePokemonData from "../hooks/getPokemonData";
import { pokeColorsAtom } from "../utils/atoms";

const PokemonDetails = () => {
  const { id } = useParams();

  // try to convert string to number
  const pokemonId = Number(id);
  const { data, error, isLoading } = usePokemonData(pokemonId);

  const [color, _] = useAtom(pokeColorsAtom);

  // if it's not a number, redirect to home
  if (isNaN(pokemonId)) {
    return <Navigate to="/" />;
  }

  if (error) {
    console.log("ERR " + error);
  }

  return (
    <div className="w-screen h-screen">
      <header
        className="flex justify-between h-1/3 w-full py-8 px-12"
        style={{
          //@ts-ignore
          backgroundColor: color[data?.types[0].type.name],
        }}
      >
        <div className="w-full h-full">
          <img
            src={data?.sprites.other["official-artwork"].front_default}
            className="bg-neutral-200 rounded-full object-cover w-1/3 border-4 bg-[url('/pokeball.svg')] bg-blend-soft-light"
            style={{
              // @ts-ignore
              // TODO: Typing this properly
              backgroundColor: color[data.types[0].type.name],
              backgroundSize: "14%",
            }}
          />
        </div>

        {/* 
          Name and ID of pokemon
        */}
        <div className="flex flex-col gap-2 justify-end items-end w-1/2 h-full px-2">
          <h1 className="text-8xl font-bold text-white">
            {data?.name.toUpperCase()}
          </h1>
          <div className="flex gap-2 items-center font-semibold">
            <span className="bg-primary rounded-lg text-white text-xl px-2 py-1">
              #{data?.id}
            </span>
            {data?.types.map((type: any) => (
              <span
                className="text-xl text-white border-2 rounded-lg px-2 py-1"
                style={{
                  // @ts-ignore
                  backgroundColor: color[type.type.name],
                }}
              >
                {type.type.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default PokemonDetails;
