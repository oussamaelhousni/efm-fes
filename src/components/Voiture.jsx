import React from "react";
import { Link } from "react-router-dom";

function Voiture({ id, Marque, TypeCarburant, PrixLocation, image }) {
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
    </section>
  );
}

export default Voiture;
