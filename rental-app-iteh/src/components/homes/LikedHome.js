import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authHeader from "../../services/auth-header";

const LikedHomes = (props) => {
  const token = localStorage.getItem("token");
  const { removeAllLikedHomes, removeLikedHome } = props;
  const backendUrl = "http://127.0.0.1:8000/images/";
  const [imageName, setImageName] = useState("");
  const likedHomes = useSelector(
    (state) => state.apartmentsReducer
  ).likedApartments;
  if (token !== "") {
    return (
      <section className="interested">
        <div style={{ overflow: "auto", height: "130px" }}>
          <h3>
            {likedHomes !== null ? likedHomes.length : 0} liked apartments
          </h3>
          {likedHomes !== null &&
            likedHomes.map((home, index) => {
              return (
                <article key={index} className="in_apart">
                  <img src={backendUrl + home.filename} alt={home.name} />
                  <div>
                    <h4>{home.name}</h4>
                    <div style={{ display: "contents" }}>
                      <p>${home.price}</p>
                      <img
                        src="http://localhost:3000/images/close.png"
                        alt="close"
                        onClick={() => removeLikedHome(home.id)}
                        style={{
                          float: "right",
                          width: "15px",
                          height: "15px",
                        }}
                      ></img>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
        <button onClick={() => removeAllLikedHomes()}>Clear all</button>
      </section>
    );
  }
  return <div></div>;
};

export default LikedHomes;
