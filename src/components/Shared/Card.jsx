/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Card({ pokemon, selectedType }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(pokemon.name);
  });

  const [pokemonDetails, setPokemonDetails] = useState({});

  const fetchIndividualPokemonDetails = async () => {
    const detailResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon?.name}`
    );
    const data = await detailResponse.json();
    setPokemonDetails(data);
  };

  useEffect(() => {
    fetchIndividualPokemonDetails();
  }, []);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const newFavorites = favorites.filter((name) => name !== pokemon.name);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(pokemon.name);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  if (selectedType) {
    if (pokemonDetails?.types?.find((t) => t?.type?.name === selectedType)) {
      console.log("found");
    } else {
      return;
    }
  }

  return (
    <div className="group relative rounded-2xl bg-gray-900 p-[2px] transition-all duration-300 hover:scale-105">
      <div className="relative rounded-2xl bg-gray-900 p-4">
        {/* Favorite button */}
        <button
          className="absolute top-2 right-2 z-10 transition-transform duration-300 hover:scale-110"
          onClick={toggleFavorite}
        >
          <BiHeart
            className={`h-6 w-6 transition-colors duration-300 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-400 hover:text-red-400"
            }`}
          />
        </button>

        {/* Pokemon image container */}
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-30`}
          />
          <img
            src={pokemonDetails?.sprites?.front_default}
            alt={pokemonDetails?.name}
            className="relative w-32 h-32 mx-auto transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Pokemon name */}
        <h2 className="text-xl font-bold text-center capitalize mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {pokemonDetails?.name}
          </span>
        </h2>

        {/* View details button */}
        <div className="flex justify-center">
          <Link
            to={`/pokemon/${pokemonDetails?.name}`}
            className={`relative overflow-hidden rounded-lg px-6 py-2 group/button`}
          >
            {/* View Details */}
            {/* Button gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 opacity-80 transition-opacity duration-300 group-hover/button:opacity-100`}
            />
            {/* Button text */}
            <span className="relative text-white font-medium">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
