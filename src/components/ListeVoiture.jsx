import React from "react";
import Voiture from "./Voiture";
import { useSelector } from "react-redux";
function ListeVoiture() {
  const voitures = useSelector((state) => state.voiture.voitures);
  return (
    <div>
      <h2>Liste Voitures</h2>
      <div className="row">
        {voitures.map((v) => {
          return (
            <div className="col">
              <Voiture {...v} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListeVoiture;
