import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/CarDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CarDetails() {
  const { id } = useParams();

  const [car, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://otol-cars.herokuapp.com/${id}`)
      .then((response) => {
        setCars(response.data);
      }, [])
      .catch(() => {
        console.log("erro");
      });
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="Details" key={car._id}>
          <h1>{car.name}</h1>
          <img className="detail-img" src={car.image} alt="Car" />
          <h2>{car.year}</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarDetails;
