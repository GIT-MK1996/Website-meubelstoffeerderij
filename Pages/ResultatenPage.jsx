import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Styles.css";
import ResultaatCard from "../components/ResultaatCard";
import resultatenItems from "../lists/resultatenItems";

export default function ResultatenPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState("stoelen"); // standaard categorie

  return (
    <div
      className="main-wrapper mx-auto p-2 bg-light rounded shadow"
      style={{ maxWidth: "1150px" }}
    >
      {/* Hero afbeelding */}
      <section
        className="rounded mb-2"
        style={{
          backgroundImage:
            "url(https://www.stoffeerderijbonte.nl/images/foto_bg_1075.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      ></section>

      <Navbar />

      {/* Filterknoppen */}
      <div className="text-center my-4">
        {["stoelen", "banken"].map((type) => (
          <button
            key={type}
            className={`btn mx-1 fw-semibold rounded-pill px-4 py-2 shadow-sm ${
              filter === type ? "btn-dark active-filter" : "btn-outline-dark"
            }`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Resultaten galerie */}
      <section className="mb-5">
        <h2 className="text-center header-text mb-4 mt-3">
          Resultaten – {filter}
        </h2>

        <div
          className="foto-container"
          style={{
            maxHeight: "500px",
            overflowY: "auto",
            paddingRight: "10px",
          }}
        >
          <div className="row g-2">
            {resultatenItems[filter].map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <ResultaatCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1050,
          }}
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Geselecteerde foto"
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* Directe verkoop */}
      <section className="mt-3 text-center">
        <h3 className="header-text">Directe verkoop</h3>
        <p className="text-center fs-5">
          We hebben ook een selectie unieke meubels die direct te koop zijn.
          Neem snel een kijkje!
        </p>
        <Link
          to="/te-koop"
          className="btn btn-te-koop btn-dark fw-semibold rounded-pill px-4 py-2 shadow-sm"
        >
          Bekijk te koop
        </Link>
      </section>
    </div>
  );
}
