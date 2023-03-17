import React from "react";
import { Navigate, useParams } from "react-router-dom";
import PokemonDetailHeader from "../components/PokemonDetailHeader";
import PokemonStats from "../components/PokemonStats";
import PokemonAbilities from "../components/PokemonAbilities";
import PokemonMoves from "../components/PokemonMoves";
import PokemonOtherData from "../components/PokemonOtherData";

const PokemonDetails = () => {
  const { id } = useParams();
  const pokemonId = Number(id);
  if (isNaN(pokemonId)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen">
      <PokemonDetailHeader id={pokemonId} />

      {/* other detail */}
      <div className="flex md:flex-row flex-col gap-4 md:py-8 md:px-12 p-3 max-h-screen">
        {/* column 1 */}
        <div className="md:w-1/2">
          <PokemonMoves id={pokemonId} />
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-4 md:w-1/2 h-full flex-grow">
          {/* stats */}
          <PokemonStats id={pokemonId} />

          {/* abilities and other info */}
          <PokemonAbilities id={pokemonId} />

          {/* other data */}
          <PokemonOtherData id={pokemonId} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
