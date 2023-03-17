import React from "react";
import usePokemonData from "../hooks/usePokemonData";
import { pokeColorsAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import usePokemonSpecies from "../hooks/usePokemonSpecies";
import { motion } from "framer-motion";

const PokemonDetailHeader = ({ id }) => {
  const { data, error, isLoading } = usePokemonData(id);
  const navigate = useNavigate();
  const { data: speciesData, isLoading: isLoadingSpecies } =
    usePokemonSpecies(id);

  const [color, _] = useAtom(pokeColorsAtom);

  if (isLoading || isLoadingSpecies) {
    return <DetailHeaderSkeleton />;
  }

  return (
    <header
      className="flex justify-between md:h-[38%] items-center w-full border-b-4 border-primary md:p-0 p-2"
      style={{
        //@ts-ignore
        backgroundColor: color[data?.types[0].type.name],
      }}
    >
      {/* data */}
      <motion.div
        className="flex flex-col items-start flex-1 justify-start px-8 py-3 gap-3"
        animate={{
          // fade in
          opacity: [0, 1],
        }}
      >
        {/* go back btn */}
        <button
          className="flex items-center gap-2 text-white px-2 py-1 hover:bg-neutral-500/30 rounded-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaChevronLeft />
          <span>Go Back</span>
        </button>

        {/* name */}
        <h1 className="md:text-7xl text-2xl font-bold text-white drop-shadow-md">
          {data?.name.toUpperCase()}
        </h1>

        {/* flavor text */}
        <p className="text-white text-xl md:block hidden text-ellipsis text-start">
          {speciesData?.flavor_text_entries[1].flavor_text}
        </p>

        <div className="flex gap-2 items-center font-semibold">
          {/* id */}
          <span className="bg-primary rounded-lg text-white md:text-lg px-2 py-1">
            #{data?.id}
          </span>
          {/* types */}
          <div className="flex gap-2 items-center text-white bg-gray-800 rounded-lg px-2 py-1 md:text-lg capitalize">
            {data.types[0].type.name}
            {data.types[1] && ` / ${data.types[1].type.name}`}
          </div>
          {/* weight */}
          <div className="flex gap-2 items-center text-white bg-gray-800 rounded-lg px-2 py-1 md:text-lg capitalize">
            {data?.weight / 10} kg
          </div>
        </div>
      </motion.div>

      {/* image */}
      <motion.img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={data?.name}
        className="w-1/4 h-full md:object-cover"
        animate={{
          // fade in
          opacity: [0, 1],
        }}
      />
    </header>
  );
};

const DetailHeaderSkeleton = () => {
  return (
    <header className="flex justify-between md:h-[40%] items-center w-full md:p-0 p-2 bg-gray-300 animate-pulse"></header>
  );
};

export default PokemonDetailHeader;
