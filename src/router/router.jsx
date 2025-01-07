import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import PokemonDetails from "../pages/PokemonDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/pokemon/:name",
        element: <PokemonDetails />,
      },
    ],
  },
]);
