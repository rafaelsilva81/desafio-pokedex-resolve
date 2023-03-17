import React from "react";
import { Navigate, useParams } from "react-router-dom";
import PokemonDetailHeader from "../components/PokemonDetailHeader";
import PokemonStats from "../components/PokemonStats";
import PokemonAbilities from "../components/PokemonAbilities";
import PokemonMoves from "../components/PokemonMoves";

const PokemonDetails = () => {
  const { id } = useParams();
  const pokemonId = Number(id);
  if (isNaN(pokemonId)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-screen h-screen">
      <PokemonDetailHeader id={pokemonId} />

      {/* other detail */}
      <div className="flex gap-4 py-8 px-12">
        {/* column 1 */}
        <div className="flex flex-col gap-4 w-1/2">
          {/* stats */}
          <PokemonStats id={pokemonId} />

          {/* abilities and other info */}
          <PokemonAbilities id={pokemonId} />
        </div>

        {/* column 2 */}
        <div className="w-1/2">
          <PokemonMoves id={pokemonId} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
