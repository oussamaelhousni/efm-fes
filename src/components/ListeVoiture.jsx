import React from "react";
import { useSelector } from "react-redux";
import Voiture from "./Voiture";
function ListeVoiture() {
  const voitures = useSelector((state) => state.voiture.voitures);
  return (
    <div>
      <h2 className="h2">Liste voitures</h2>

      <div className="row gap-4">
        {voitures.map((v) => {
          return <Voiture {...v} />;
        })}
      </div>
    </div>
  );
}

export default ListeVoiture;
