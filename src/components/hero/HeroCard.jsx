import React from "react";
import { Link } from "react-router";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearanceComics,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imagePath} alt={superhero} className="card-img-top" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}

              <Link to={`/hero/${id}`}>Más... </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
