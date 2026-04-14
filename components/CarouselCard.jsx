import React, { useState } from "react";

export default function CarouselCard({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.isArray(item.images) ? item.images : [];
  const [modalOpen, setModalOpen] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div className="card h-100 shadow-sm">
      {/* 📸 IMAGE + PIJLTJES */}
      <div style={{ position: "relative" }}>
        <img
          src={item.images[currentIndex]}
          alt={item.title}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          onClick={() => setModalOpen(true)}
        />

        {/* ⬅️ */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "5px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        {/* ➡️ */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: "5px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>

      {/* 📄 INFO */}
      <div className="card-body text-center">
        <h5>{item.title}</h5>
        <p>{item.beschrijving}</p>
        <p className="fw-bold">{item.prijs}</p>
      </div>

      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={item.title}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
            }}
          />

          {/* ⬅️ PIJLTJE LINKS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              padding: "10px 18px",
              fontSize: "24px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            ‹
          </button>

          {/* ➡️ PIJLTJE RECHTS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              padding: "10px 18px",
              fontSize: "24px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            ›
          </button>

          {/* ✕ SLUIT KNOP */}
          <button
            onClick={() => setModalOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
