import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { NavLink, Router } from "react-router-dom";

export interface Hero {
  id: number;
  name: string;
  power: number;
  life: number;
  id_type_weapon: number;
  message: string;
}

const Heros = () => {
  const [listHero, setListHero] = useState<Hero[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/heros/")
      .then((response: AxiosResponse<{ data: Hero[] }>) => {
        console.log("Reponse GET hero: ", response.data.data);
        let myHero = [...response.data.data];
        setListHero(myHero);
      });
  }, []);
  return (
    <div className="container p-5">
      <ul className="row">
        {listHero.map((hero: Hero, id) => (
          <div className="col-4 my-3 " key={id}>
            <NavLink className="link" to={`/about/${hero.id}`}>
              <div className="card text-center boxShadow">
                <h5 className="card-title"> {hero.name} </h5>
                <p>ID : {hero.id}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Heros;
