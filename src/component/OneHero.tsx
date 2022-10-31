import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "./Heros";

const OneHero = () => {
  const [listHeroById, setlistHeroById] = useState<Hero[] | undefined>();
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/heros/${params.id}`)
      .then((response: AxiosResponse<{ data: Hero[] }>) => {
        console.log("Reponse GET hero: ", response.data.data);
        let myHero = [...response.data.data];
        setlistHeroById(myHero);
      });
  }, []);
  return (
    <div>
      <ul>
        {listHeroById ? (
          listHeroById.map((hero: Hero, id) => (
            <li key={id}>
              Nom : {hero.name}, Life : {hero.life}, Power : {hero.power},
            </li>
          ))
        ) : (
          <div>rien</div>
        )}
      </ul>
    </div>
  );
};

export default OneHero;
