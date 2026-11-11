import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVoiture } from "../slices/voitureSlice";
import { useNavigate } from "react-router-dom";

function SupprimerVoiture() {
  const voitures = useSelector((state) => state.voiture.voitures);
  const [choosedId, setChoosedId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Supprimer une voiture :</h2>

      <select
        onChange={(e) => {
          console.log(e.target.value);
          setChoosedId(e.target.value);
        }}
      >
        <option defaultChecked>Choisir une voiture</option>
        {voitures.map((v) => {
          return (
            <option defaultChecked key={v.id} value={v.id}>
              {v.Marque}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          if (!choosedId) {
            return alert("Please select an ID");
          }
          dispatch(deleteVoiture(choosedId));
          navigate("/");
        }}
      >
        Supppimer
      </button>
    </div>
  );
}

export default SupprimerVoiture;
