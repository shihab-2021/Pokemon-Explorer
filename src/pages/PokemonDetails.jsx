import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useParams } from "react-router-dom";

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIndividualPokemonDetails = async () => {
    const detailResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const data = await detailResponse.json();
    setPokemonDetails(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIndividualPokemonDetails();
  }, []);

  return (
    <main className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800 text-white">
      <div className="relative container mx-auto px-4 py-10">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <VscLoading className="animate-spin text-4xl" />
          </div>
        ) : (
          <div className="relative max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            {/* Header */}
            <div className="text-center mb-8">
              <img
                src={pokemonDetails?.sprites.front_default}
                alt={pokemonDetails?.name}
                className="w-36 h-36 mx-auto"
              />
              <h1 className="text-4xl font-bold capitalize">
                {pokemonDetails?.name}
              </h1>
            </div>
            {/* Types */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Types</h2>
              <div className="flex flex-wrap gap-3">
                {pokemonDetails?.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Abilities */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
              <div className="flex flex-wrap gap-3">
                {pokemonDetails?.abilities.map((ability) => (
                  <span
                    key={ability.ability.name}
                    className="px-4 py-1 rounded-full bg-teal-100 text-teal-700 capitalize"
                  >
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Base Stats */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Base Stats</h2>
              <div className="space-y-3">
                {pokemonDetails?.stats.map((stat) => (
                  <div key={stat.stat.name} className="flex items-center">
                    <span className="w-40 capitalize">{stat.stat.name}</span>
                    <div className="flex-1 h-4 bg-gray-600 rounded">
                      <div
                        className="h-full bg-gradient-to-r from-teal-100 to-teal-200 rounded"
                        style={{
                          width: `${(stat.base_stat / 255) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="ml-4">{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
