import React, { useEffect, useState } from "react";
import Slider from "../common/Slider";
import "./index.css";
import { BiBed, BiRuler } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import {
  AiFillCar,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import apartmentServices from "../../services/apartment.services";
import { useSelector } from "react-redux";

function HomeDetail({ match }) {
  const { id } = match.params;
  const [liked, setLiked] = useState(false);
  const [apartment, setApartment] = useState("");
  const likedApartments = useSelector(
    (state) => state.apartmentsReducer
  ).likedApartments;
  console.log(likedApartments);
  useEffect(() => {
    apartmentServices
      .getOneApartment(id)
      .then((response) => {
        setApartment(response[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);
  useEffect(() => {
    if (likedApartments !== null) {
      let isItLiked = likedApartments.filter(
        (one) => one.id === Number.parseInt(id)
      );
      if (isItLiked.length > 0) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [likedApartments, id]);

  return (
    <div style={{ marginTop: "10vh" }}>
      <Slider home_id={id} />
      <div className="quickInfo">
        <div className="quickInfoSection">
          <div className="quickInfoNav">
            <a href="/" style={{ color: "white" }}>
              Price Listing
            </a>
          </div>
          <div className="quickInfoBody">
            <div className="quickInfoInfo">
              <span> For {apartment.category} </span>
              <h3>${apartment.price}</h3>
              <span>{apartment.street} </span>
            </div>
          </div>
        </div>
        <div className="quickInfoSection">
          <div className="quickInfoBody">
            <h4> {apartment.name}</h4>
            <div className="quickInfoIcons">
              <div className="quickInfoIcon">
                <BiBed style={{ fontSize: "30px", marginRight: "15px" }} />
                <span>Beds</span>
                <span className="quickInfoBodyValue">
                  {apartment.rooms_number}
                </span>
              </div>
              <div className="quickInfoIcon">
                <AiFillCar style={{ fontSize: "30px", marginRight: "15px" }} />
                <span>Parking</span>
                <span className="quickInfoBodyValue">
                  {apartment.parking_spaces}
                </span>
              </div>
              <div className="quickInfoIcon">
                <BiRuler style={{ fontSize: "30px", marginRight: "15px" }} />
                <span>Square Fottage</span>
                <span className="quickInfoBodyValue">
                  {apartment.square_footage}
                </span>
              </div>
            </div>
            <p>___________________________</p>
          </div>
        </div>
        <div className="quickInfoSection">
          <div className="quickInfoShare">
            <a className="quickInfoS" href="/">
              <AiOutlineShareAlt />
            </a>
            <a className="quickInfoS" href="/">
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </a>
            <a className="quickInfoS" href="/">
              <BsCalendar />
            </a>
          </div>
          <div className="quickInfoBody">
            <div className="quickInfoBodyMeta">
              <div className="row">
                <div className="col-lg-6 col-md-3 col-sm-3">
                  <div className="quickInfoBodyMetaItem">
                    <span> Type </span>
                    <p>House</p>
                  </div>
                  <div className="quickInfoBodyMetaItem">
                    <span> Owner </span>
                    <p>Agent </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailWrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="detailOwerview">
                <h4> Property Overview</h4>
                <p>{apartment.info}</p>
                <div className="row">
                  <div className="col-md-6 mb-3"></div>
                  <div className="col-md-6 mb-3"></div>
                  <div className="col-md-6 mb-3"></div>
                  <div className="col-md-6 mb-3"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetail;
