import React from "react";
import usePokemonData from "../hooks/usePokemonData";

const PokemonMoves = ({ id }: { id: number }) => {
  const { data, isLoading } = usePokemonData(id);

  return (
    <>
      <div className="flex flex-col gap-2 bg-gray-800 rounded-lg p-4 max-h-full">
        <h1 className="text-white text-2xl font-semibold">Learnable Moves</h1>

        {/* scrollable area */}
        <div className="grid grid-cols-4 gap-2">
          {data.moves.map((move: any, index: number) => {
            return (
              <div
                className="flex justify-between items-center bg-gray-700 rounded-lg p-2"
                key={index}
              >
                <div className="text-white font-semibold">{move.move.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonMoves;
