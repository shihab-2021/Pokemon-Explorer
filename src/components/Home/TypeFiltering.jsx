import { useEffect, useState } from "react";

export default function TypeFiltering({ setSelectedType }) {
  const [types, setTypes] = useState([]);
  const fetchTypes = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type`);
      const data = await response.json();
      setTypes(data?.results);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);
  return (
    <div className="relative w-full max-w-xl">
      <select
        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
        name="types"
        id="types"
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option className="hidden" value="">
          Type Filtering
        </option>
        {types?.map((type) => (
          <option key={type?.name} value={type?.name}>
            {type?.name}
          </option>
        ))}
      </select>
      {/* <input
        type="text"
        placeholder="Search Pokémon..."
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
    </div>
  );
}
