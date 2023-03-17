import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai/react";
import React, { useRef } from "react";
import api from "../utils/api";
import { pokeColorsAtom } from "../utils/atoms";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import usePokemonData from "../hooks/usePokemonData";

const PokemonCard = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = usePokemonData(id);

  const [color, _] = useAtom(pokeColorsAtom);

  if (isLoading) {
    return <PokemonCardSkeleton />;
  }

  if (!data || error) return <PokemonCardSkeleton />;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      animate={{
        // fade in
        opacity: [0, 1],
        // time
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      onClick={() => {
        navigate(`/pokemon/${id}`);
      }}
    >
      <div
        className="rounded-lg shadow-lg py-4 cursor-pointer"
        style={{
          // @ts-ignore
          // TODO: Typing this properly
          backgroundColor: color[data.types[0].type.name],
        }}
      >
        <div className="flex flex-col gap-3 items-center justify-center">
          <div
            className="bg-[url('./pokeball.svg')] rounded-full bg-blend-soft-light bg-repeat-space border-2 mx-4 my-2"
            style={{
              // @ts-ignore
              // TODO: Typing this properly
              backgroundColor: color[data.types[0].type.name],
              backgroundSize: "14%",
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              className="w-48"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-gray-800/30 w-full p-1 justify-center">
            <h2 className="text-white text-sm md:text-xl capitalize font-semibold drop-shadow-md">
              {data?.name}
            </h2>

            <span className="bg-primary rounded-lg text-white text-xs px-2 py-1 font-semibold">
              #{data?.id}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PokemonCardSkeleton = () => {
  return (
    <div
      className="rounded-lg shadow-lg py-4 cursor-pointer h-64
      bg-gray-500/30 animate-pulse
    "
    ></div>
  );
};
export default PokemonCard;
