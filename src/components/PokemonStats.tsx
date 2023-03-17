import clsx from "clsx";
import React from "react";
import usePokemonData from "../hooks/usePokemonData";

const PokemonStats = ({ id }: { id: number }) => {
  const { data, isLoading } = usePokemonData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 shadow-md bg-gray-800 rounded-lg p-4">
      <h1 className="text-white text-2xl font-semibold">Stats</h1>

      {/* stat list */}
      {data.stats.map((stat: any, index: number) => {
        const statPercent = (stat.base_stat / 255) * 100;
        return (
          <div className="flex flex-col" key={index}>
            <div className="flex justify-between uppercase">
              <div className="text-white font-semibold">{stat.stat.name}</div>
              <div className="text-white font-semibold">{stat.base_stat}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-neutral-200 rounded-lg h-2">
                <div
                  className={clsx("h-full rounded-lg", {
                    "bg-red-500": statPercent < 30,
                    "bg-yellow-500": statPercent >= 30 && statPercent < 40,
                    "bg-green-500": statPercent >= 40,
                  })}
                  style={{ width: `${statPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonStats;
