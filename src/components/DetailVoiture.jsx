import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Voiture from "./Voiture";
import { Link } from "react-router-dom";
function DetailVoiture() {
  const navigate = useNavigate();
  const { id } = useParams();

  const voiture = useSelector((state) => {
    return state.voiture.voitures.find((v) => v.id === id);
  });

  const { Marque, PrixLocation, TypeCarburant, image } = voiture;

  useEffect(() => {
    console.log("id", id);
    console.log("voiture", voiture);
    if (id && !voiture) {
      navigate("/");
    }
  }, [id]);
  return (
    <div>
      <section className="card" style={{ maxWidth: 320 }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{Marque}</h4>
          <p className="card-text">
            <span>Type Carburant : {TypeCarburant}</span> <br />
            <span>PrixLocation : {PrixLocation}</span> <br />
          </p>
          <Link to={"/"} className="btn-solid theme-primary">
            retour a la liste
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DetailVoiture;
