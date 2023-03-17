import clsx from "clsx";
import React from "react";
import usePokemonSpecies from "../hooks/usePokemonSpecies";
import { Navigate } from "react-router-dom";

const PokemonOtherData = ({ id }) => {
  const { data, isLoading, error } = usePokemonSpecies(id);

  if (isLoading) {
    return <PokemonOtherDataSkeleton />;
  }

  if (!data || error) return <Navigate to="/" />;

  const captureRatePercent = (data.capture_rate / 255) * 100;

  return (
    <div className="flex md:flex-row flex-col gap-2 md:items-center h-full">
      {/* capture rate */}
      <div className="md:w-1/3 flex justify-center flex-col gap-2 bg-gray-800 rounded-lg p-4 self-stretch">
        <h1 className="text-white text-2xl font-semibold">Capture Rate</h1>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-neutral-200 rounded-lg h-2">
            <div
              className={clsx("h-full rounded-lg", {
                "bg-red-500": captureRatePercent < 30,
                "bg-yellow-500":
                  captureRatePercent >= 30 && captureRatePercent < 40,
                "bg-green-500": captureRatePercent >= 40,
              })}
              style={{ width: `${captureRatePercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* egg groups */}
      <div className="md:w-1/3 flex flex-col gap-2 bg-gray-800 rounded-lg p-4 self-stretch">
        <h1 className="text-white text-2xl font-semibold">Egg Groups</h1>
        <div className="flex gap-2">
          {data.egg_groups.map((eggGroup, index) => {
            return (
              <div className="text-white font-semibold capitalize" key={index}>
                {eggGroup.name.replace("-", "") + "."}
              </div>
            );
          })}
        </div>
      </div>

      {/* generation */}
      <div className="md:w-1/3 flex flex-col gap-2 bg-gray-800 rounded-lg p-4 self-stretch">
        <h1 className="text-white text-2xl font-semibold">Generation</h1>
        <div className="text-white font-semibold uppercase">
          {data.generation.name.replace("-", " ")}
        </div>
      </div>
    </div>
  );
};

const PokemonOtherDataSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col gap-2 md:items-center h-20">
      {/* capture rate */}
      <div className="md:w-1/3 flex justify-center flex-col gap-2 bg-gray-300 rounded-lg p-4 self-stretch animate-pulse" />

      {/* egg groups */}
      <div className="md:w-1/3 flex flex-col gap-2 bg-gray-300 rounded-lg p-4 self-stretch animate-pulse" />

      {/* generation */}
      <div className="md:w-1/3 flex flex-col gap-2 bg-gray-300 rounded-lg p-4 self-stretch animate-pulse" />
    </div>
  );
};

export default PokemonOtherData;
