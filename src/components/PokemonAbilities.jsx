import { Navigate } from "react-router-dom";
import usePokemonData from "../hooks/usePokemonData";

const PokemonAbilities = ({ id }) => {
  const { data, isLoading, error } = usePokemonData(id);

  if (isLoading) {
    return <PokemonAbilitiesSkeleton />;
  }

  if (!data || error) return <Navigate to="/" />;
  return (
    <div className="flex flex-col gap-2 bg-gray-800 rounded-lg p-4">
      <h1 className="text-white text-2xl font-semibold">Abilities</h1>
      <div className="flex flex-col gap-2">
        {data.abilities.map((ability, index) => {
          return (
            <div className="flex items-center gap-1" key={index}>
              <div className="text-white font-semibold capitalize">
                {ability.ability.name}
              </div>
              <div className="text-white font-semibold">
                {ability.is_hidden ? "(hidden)" : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PokemonAbilitiesSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-300 rounded-lg p-4 animate-pulse h-20" />
  );
};

export default PokemonAbilities;