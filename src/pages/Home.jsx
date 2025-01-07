import { BiSearch } from "react-icons/bi";
import pokemonImg from "../assets/International_Pokémon_logo.png";
import { useEffect, useState } from "react";
import Card from "../components/Shared/Card";
import { VscLoading } from "react-icons/vsc";
import Pagination from "../components/Home/Pagination";
import TypeFiltering from "../components/Home/TypeFiltering";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [paginationPageNumber, setPaginationPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedType, setSelectedType] = useState(null);

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          (paginationPageNumber - 1) * 50
        }&limit=50`
      );
      const data = await response.json();
      const sortedPokemon = data?.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setTotalPages(Math.ceil(data.count / 50));
      setPokemon(sortedPokemon);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon?.filter((p) =>
    p?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const handlePageChange = async (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (newPage < 1 || newPage > totalPages || isLoading) return;

    setIsLoading(true);
    try {
      const offset = (newPage - 1) * 50;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${50}`
      );
      const data = await response.json();
      const sortedPokemon = data?.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPaginationPageNumber(newPage);
      setPokemon(sortedPokemon);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800">
      <div className="relative">
        {/* Gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-xl opacity-50"></div>
        {/* Main content */}
        <div className="container mx-auto px-6 py-12 relative">
          <img
            className="max-w-[200px] mx-auto"
            src={pokemonImg}
            alt="pokemon"
          />
          <div className="flex justify-center gap-4 my-6">
            <div className="relative w-full max-w-xl">
              <BiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <TypeFiltering setSelectedType={setSelectedType} />
          </div>
          {isLoading && (
            <div className="py-10 text-3xl text-white">
              <VscLoading className="mx-auto animate-spin" />
            </div>
          )}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPokemon?.map((pokemon) => (
                <Card
                  key={pokemon.name}
                  pokemon={pokemon}
                  selectedType={selectedType}
                />
              ))}
            </div>
          )}
          <div className="flex items-center justify-center space-x-1 mx-auto py-10">
            {/* {renderPageNumbers()} */}
            <Pagination
              handlePageChange={handlePageChange}
              paginationPageNumber={paginationPageNumber}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
