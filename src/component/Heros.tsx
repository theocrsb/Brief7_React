import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { NavLink, Router } from "react-router-dom";

export interface Hero {
  id: number;
  name: string;
  power: number;
  life: number;
  id_type_weapon: number;
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
    <div>
      <ul className="list-group">
        {listHero.map((hero: Hero, id) => (
          <NavLink to={`/about/${hero.id}`}>
            <li className="list-group-item list-group-item-dark" key={id}>
              Name : {hero.name}, Life : {hero.life}, Power : {hero.power},
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Heros;
