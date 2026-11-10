import React from "react";
import {
  addVoiture,
  supprimerVoiture,
  updateVoiture,
} from "./slices/voitureSlice";
import { useDispatch } from "react-redux";
import Voiture from "./components/Voiture";
import ListeVoiture from "./components/ListeVoiture";
import { Link, Routes, Route } from "react-router-dom";
import DetailsVoiture from "./components/DetailsVoiture";
const v = {
  id: "v1",
  Marque: "Dacia_Logan",
  TypeCarburant: "Diesel",
  PrixLocation: 200,
  image: "dacia.jpg",
};
function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Liste Voitures
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/add">
            Ajouter Voiture
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/del">
            Supprimer Voiture
          </a>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<ListeVoiture />} />
        <Route path="/:id" element={<DetailsVoiture />} />
      </Routes>
    </div>
  );
}

export default App;
