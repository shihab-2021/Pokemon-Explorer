import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
