import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Image, Slide, SlideContent, Wrapper } from "./SliderElements";
import "./index.css";
import apartmentServices from "../../../services/apartment.services";
import { useSelector } from "react-redux";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const homes = useSelector((state) => state.apartmentsReducer).apartments;
  //probles homes null jer se ne ucitava
  //trebalo bi svi apartmani da se ucitavaju na pocetku
  let likedHome;
  useEffect(() => {
    apartmentServices
      .getOneApartment(props.home_id)
      .then((response) => (likedHome = response.data));
  }, []);

  if (homes !== null) {
    likedHome = homes.filter((one) => one.id === props.home_id)[0];
  }

  const nextSlide = () => {
    if (likedHome) {
      setCurrent(current === likedHome.images.length - 1 ? 0 : current + 1);
    }
  };
  const prevSlide = () => {
    if (likedHome) {
      setCurrent(current === 0 ? likedHome.images.length - 1 : current - 1);
    }
  };

  return (
    <Wrapper>
      <SlideContent>
        <FaChevronLeft className="leftArrow" onClick={prevSlide} />
        <FaChevronRight className="rightArrow" onClick={nextSlide} />
        {likedHome &&
          likedHome.images.length > 0 &&
          likedHome.images.map((slide, index) => {
            return (
              <Slide index={index} key={index}>
                {index === current && (
                  <Image
                    src={process.env.REACT_APP_BASE_URL_IMAGE + slide.filename}
                    alt=""
                  />
                )}
              </Slide>
            );
          })}
      </SlideContent>
    </Wrapper>
  );
};

export default Slider;
