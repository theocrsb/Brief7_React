import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./component/OneHero";
import Heros from "./component/Heros";
import { NavLink } from "react-router-dom";
import Create from "./component/Create";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/about">
          <button type="button" className="btn btn-info">
            All Heros
          </button>
        </NavLink>
        <NavLink to="/create">
          <button type="button" className="btn btn-info">
            Create New Hero
          </button>
        </NavLink>
        <Routes>
          <Route path="/about/:id" element={<Hero />} />
          <Route path="/about" element={<Heros />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
