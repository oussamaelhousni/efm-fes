import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function DetailsVoiture() {
  const { id } = useParams();
  const {
    id: vId,
    Marque,
    TypeCarburant,
    PrixLocation,
    image,
  } = useSelector((state) => {
    return state.voiture.voitures.find((v) => v.id === id);
  });
  return (
    <section className="card col" style={{ maxWidth: 320 }}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{Marque}</h4>
        <p className="card-text">
          <span>Type Carburant : {TypeCarburant}</span>
          <br />
          <span>Prix Location : {PrixLocation}</span>
        </p>
        <Link to={`/${id}`} className="btn-solid theme-primary">
          Details
        </Link>
      </div>
      <Link to={`/`} className="btn-solid theme-primary">
        Retour a la liste
      </Link>
    </section>
  );
}

export default DetailsVoiture;
