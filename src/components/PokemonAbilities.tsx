import usePokemonData from "../hooks/usePokemonData";

const PokemonAbilities = ({ id }: { id: number }) => {
  const { data, isLoading } = usePokemonData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 bg-gray-800 rounded-lg p-4">
      <h1 className="text-white text-2xl font-semibold">Abilities</h1>
      <div className="flex flex-col gap-2">
        {data.abilities.map((ability: any, index: number) => {
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

export default PokemonAbilities;
