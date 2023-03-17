import React from "react";
import usePokemonData from "../hooks/usePokemonData";
import { Navigate } from "react-router-dom";

const PokemonMoves = ({ id }: { id: number }) => {
  const { data, isLoading, error } = usePokemonData(id);

  if (isLoading) {
    return <PokemonMovesSkeleton />;
  }

  if (!data || error) return <Navigate to="/" />;

  return (
    <div className="gap-2 bg-gray-800 rounded-lg p-4 h-full max-h-full overflow-y-auto">
      <h1 className="text-white text-2xl font-semibold mb-4">
        Learnable Moves
      </h1>

      {/* 
        scrollable area 
        this scrollable area should not go beyond the height of the parent container
        which is defined as h-full because it
      */}
      <div>
        <div className="h-full grid grid-cols-4 gap-2">
          {data.moves.map((move: any, index: number) => {
            return (
              <div
                className="flex justify-between items-center bg-gray-700 rounded-lg p-2"
                key={index}
              >
                <div className="text-white font-semibold capitalize text-xs md:text-sm break-words">
                  {move.move.name.replace("-", " ")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PokemonMovesSkeleton = () => {
  return (
    <div className="gap-2 bg-gray-300 rounded-lg p-4 h-full animate-pulse" />
  );
};

export default PokemonMoves;
