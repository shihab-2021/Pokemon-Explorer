import Card from "../components/Shared/Card";
import pokemonImg from "../assets/International_Pokémon_logo.png";

export default function Favorites() {
  const favoriteNames = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <main className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800">
      <div className="relative">
        {/* Gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-xl opacity-50"></div>
        <div className="container mx-auto px-6 py-12 relative">
          <img
            className="max-w-[200px] mx-auto"
            src={pokemonImg}
            alt="pokemon"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {favoriteNames?.map((pokemon) => (
              <Card key={pokemon.name} pokemon={{ name: pokemon }} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
