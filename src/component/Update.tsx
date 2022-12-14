import { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Hero } from "./Heros";
import { NavLink, useParams } from "react-router-dom";

const Update = () => {
  const [retourupdate, setRetourupdate] = useState<string>("");
  const params = useParams();
  console.log(params.id);
  const heroName = useRef<HTMLInputElement>(null);
  const heroPower = useRef<HTMLInputElement>(null);
  const heroLife = useRef<HTMLInputElement>(null);

  const [oneHeroById, setOneHeroById] = useState<Hero | undefined>();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/heros/${params.id}`)
      .then((response: AxiosResponse<{ data: Hero[] }>) => {
        console.log("Reponse one Hero: ", response.data.data);
        let myHero = response.data.data[0];
        setOneHeroById(myHero);
      });
  }, []);
  const handleSubmit = () => {
    console.log(heroName.current);
    axios
      .put<Hero>(`http://localhost:8080/api/heros/${params.id}`, {
        name: heroName.current?.value,
        power: heroPower.current?.value,
        life: heroLife.current?.value,
      })
      .then(function (response) {
        console.log(response);
        setRetourupdate(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        setRetourupdate(
          error.code +
            " : Veuillez saisir un nom en lettre, une puissance en chiffre et des points de vie en chiffre."
        );
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
            placeholder={oneHeroById?.name}
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
            placeholder={oneHeroById?.power.toString()}
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
            placeholder={oneHeroById?.life.toString()}
            required
          />
        </div>

        <div className="d-flex justifycenter mb-3">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            value="Update This Hero"
          >
            Update
          </button>
        </div>
        <div
          className="text-center"
          style={{
            fontWeight: "bolder",
            fontSize: 40,
            color: "black",
          }}
        >
          {retourupdate}
        </div>
      </div>
    </div>
  );
};

export default Update;
