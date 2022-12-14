import { AxiosResponse } from "axios";
import React, { useRef, useState } from "react";
import axios from "axios";
import { Hero } from "./Heros";
import { NavLink } from "react-router-dom";

const Create = () => {
  const [retour, setRetour] = useState("");
  const heroName = useRef<HTMLInputElement>(null);
  const heroPower = useRef<HTMLInputElement>(null);
  const heroLife = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(heroName.current);
    axios
      .post<Hero>("http://localhost:8080/api/heros/", {
        name: heroName.current?.value,
        power: heroPower.current?.value,
        life: heroLife.current?.value,
      })
      .then(function (response) {
        console.log("reponse" + response.status);
        if ((response.status = 201)) {
          console.log(response.data.message);
          setRetour(response.data.message);
        }
      })
      .catch(function (error) {
        console.log("error" + error);
        if ((error.status = 500)) {
          console.log(error);
          setRetour(
            error.code +
              " : Veuillez saisir un nom en lettre, une puissance en chiffre et des points de vie en chiffre."
          );
        }
      });
  };
  return (
    <div className="d-flex justifycenter">
      <div className="w-50 m-3">
        <div className="input-group m-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First and last name</span>
          </div>
          <input
            type="text"
            className="form-control "
            ref={heroName}
            placeholder="exemple : Bruce Wayne"
            required
          />
        </div>

        <div className="input-group m-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Power</span>
          </div>
          <input
            type="number"
            className="form-control"
            ref={heroPower}
            placeholder="100"
            required
          />
        </div>
        <div className="input-group m-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Life</span>
          </div>
          <input
            type="number"
            className="form-control"
            ref={heroLife}
            placeholder="500"
            required
          />
        </div>
        <div className="d-flex justifycenter mb-3">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            value="Cr??er ce nouveau Hero"
          >
            Create New Hero
          </button>
        </div>
        {/* <input
        type="button"
        onClick={handleSubmit}
        value="Cr??er ce nouveau Hero"
      /> */}
        <div
          className="text-center"
          style={{
            fontWeight: "bolder",
            fontSize: 40,
            color: "black",
          }}
        >
          {retour}
        </div>
      </div>
    </div>
  );
};

export default Create;
