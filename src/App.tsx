import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./component/OneHero";
import Heros from "./component/Heros";
import { NavLink } from "react-router-dom";
import Create from "./component/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Update from "./component/Update";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand p-3" href="#">
            Fight Club
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <NavLink to="/about" className="link">
                    All Hero <span className="sr-only"></span>
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/create" className="link">
                    Create New Hero <span className="sr-only"></span>
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/about/:id" element={<Hero />} />
          <Route path="/about" element={<Heros />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
