import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Hero } from "./Heros";

const OneHero = () => {
  const [oneHeroById, setOneHeroById] = useState<Hero | undefined>();
  const [retourdelete, setRetourdelete] = useState<string>("");
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/heros/${params.id}`)
      .then((response: AxiosResponse<{ data: Hero[] }>) => {
        console.log("Reponse one Hero: ", response.data.data);
        let myHero = response.data.data[0];
        setOneHeroById(myHero);
      });
  }, []);

  const handleclickD = () => {
    axios
      .delete<Hero>(`http://localhost:8080/api/heros/${params.id}`)
      .then(function (response) {
        console.log(response.data.message);
        setRetourdelete(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        setRetourdelete(error);
      });
  };

  return (
    <div className="container m-3">
      <ul className="row">
        {oneHeroById ? (
          <div className="card text-center boxShadow">
            <div className="">
              <h5
                className="card-title p-2"
                style={{
                  fontWeight: "bolder",
                  fontSize: 40,
                  color: "grey",
                }}
              >
                {" "}
                {oneHeroById.name}{" "}
              </h5>
              <p className="card-text">Name : {oneHeroById.name}</p>
              <p className="card-text">Power : {oneHeroById.power}</p>

              <p className="card-text">Life : {oneHeroById.life}</p>

              <div className="d-flex justify-content-around">
                <NavLink to={`/update/${oneHeroById.id}`}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary m-3"
                  >
                    Update
                  </button>
                </NavLink>
                <button
                  type="button"
                  className="btn btn-outline-secondary m-3"
                  onClick={handleclickD}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">Ce Hero n'existe pas</div>
        )}
      </ul>
      <div
        className="text-center"
        style={{
          fontWeight: "bolder",
          fontSize: 40,
          color: "black",
        }}
      >
        {retourdelete}
      </div>
    </div>
  );
};

export default OneHero;
