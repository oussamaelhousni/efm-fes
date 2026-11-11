import React from "react";
import { Link } from "react-router-dom";

function Voiture({ id, Marque, PrixLocation, TypeCarburant, image }) {
  return (
    <section className="card" style={{ maxWidth: 320 }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{Marque}</h4>
        <p className="card-text">
          <span>Type Carburant : {TypeCarburant}</span> <br />
          <span>PrixLocation : {PrixLocation}</span> <br />
        </p>
        <Link to={"/" + id} className="btn-solid theme-primary">
          Details
        </Link>
      </div>
    </section>
  );
}

export default Voiture;
