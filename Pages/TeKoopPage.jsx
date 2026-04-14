import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Styles.css";
import verkoopItems from "../lists/verkoopItems";
import CarouselCard from "../components/CarouselCard";



export default function TeKoopPage() {
  const [filter, setFilter] = useState("stoelen");

  return (
    <div
      className="main-wrapper mx-auto p-2 bg-light rounded shadow"
      style={{ maxWidth: "1150px" }}
    >
      {/* Bovenste foto */}
      <section
        className="rounded mb-2"
        style={{
          backgroundImage:
            "url('/fotos/te-koop/fotoIjs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></section>

      <Navbar />

      <section className="text-center mt-4 mb-5">
        <h2 className="header-text">Te koop</h2>
        <p className="fs-5">Bekijk hier onze producten.</p>
        <div className="text-center my-4">
          {Object.keys(verkoopItems).map((categorie) => (
            <button
              key={categorie}
              className={`btn mx-1 fw-semibold rounded-pill px-4 py-2 shadow-sm ${
                filter === categorie ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setFilter(categorie)}
            >
              {categorie.charAt(0).toUpperCase() + categorie.slice(1)}
            </button>
          ))}
        </div>
        <div className="row g-3 justify-content-center">
          {verkoopItems[filter].map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>

              <CarouselCard item={item} />
               
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}
