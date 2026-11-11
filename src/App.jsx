import React from "react";
import {
  addVoiture,
  deleteVoiture,
  updateVoiture,
} from "./slices/voitureSlice";
import { useDispatch } from "react-redux";
import Voiture from "./components/Voiture";
import ListeVoiture from "./components/ListeVoiture";
import DetailVoiture from "./components/DetailVoiture";
import { Link, Route, Routes } from "react-router-dom";
import SupprimerVoiture from "./components/SupprimerVoiture";
const voiture = {
  id: "v2",
  Marque: "Dacia_Sandero",
  TypeCarburant: "Diesel",
  PrixLocation: 1500,
  image: "dacia.jpg",
};
function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            addVoiture({
              id: "v2",
              Marque: "Dacia_Sandero",
              TypeCarburant: "Diesel",
              PrixLocation: 1500,
              image: "dacia.jpg",
            }),
          );
        }}
      >
        Ajouter
      </button>
      <button
        onClick={() => {
          dispatch(deleteVoiture("v1"));
        }}
      >
        Supprimer
      </button>
      <button
        onClick={() => {
          dispatch(
            updateVoiture({ id: "v3", PrixLocation: 10, image: "dacia.jpg" }),
          );
        }}
      >
        update
      </button>
      <header>
        <Link to="/">Liste Voiture</Link>
        <Link to="/add">Add</Link>
        <Link to="/add">Del</Link>
      </header>
      <Routes>
        <Route path="/" element={<ListeVoiture />} />
        <Route path="/:id" element={<DetailVoiture />} />
        <Route path="/del" element={<SupprimerVoiture />} />
      </Routes>
    </div>
  );
}

export default App;
