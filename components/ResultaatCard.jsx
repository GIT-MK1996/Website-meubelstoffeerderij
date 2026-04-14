import React, { useState } from "react";

export default function ResultaatCard({ item }) {
  const [tab, setTab] = useState("before");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const fotos = item[tab];

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  const switchTab = (newTab) => {
    setTab(newTab);
    setCurrentIndex(0); // reset naar eerste foto bij wisselen
  };

  return (
    <div className="card shadow-sm mb-4">
      {/* Naam + soort */}
      <div className="card-header text-center">
        <h5 className="mb-0">{item.naam}</h5>
        <small className="text-muted">{item.soort}</small>
      </div>

      {/* Before / After knoppen */}
      <div className="d-flex">
        <button
          className={`btn w-50 rounded-0 ${tab === "before" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => switchTab("before")}
        >
          Voor
        </button>
        <button
          className={`btn w-50 rounded-0 ${tab === "after" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => switchTab("after")}
        >
          Na
        </button>
      </div>

      {/* Foto met pijltjes */}
      <div style={{ position: "relative" }}>
        <img
          src={fotos[currentIndex]}
          alt={`${tab} ${currentIndex + 1}`}
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover", cursor: "zoom-in" }}
          onClick={() => setModalOpen(true)}
        />

        {fotos.length > 1 && (
          <>
            <button onClick={prev} style={{
              position: "absolute", top: "50%", left: "5px",
              transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)",
              color: "white", border: "none", padding: "5px 10px", cursor: "pointer"
            }}>‹</button>

            <button onClick={next} style={{
              position: "absolute", top: "50%", right: "5px",
              transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)",
              color: "white", border: "none", padding: "5px 10px", cursor: "pointer"
            }}>›</button>

            <span style={{
              position: "absolute", bottom: "5px", right: "8px",
              background: "rgba(0,0,0,0.5)", color: "white",
              padding: "2px 8px", borderRadius: "10px", fontSize: "0.75rem"
            }}>
              {currentIndex + 1}/{fotos.length}
            </span>
          </>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{
          position: "fixed", top: 0, left: 0,
          width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center",
          justifyContent: "center", zIndex: 9999, cursor: "zoom-out"
        }}>
          <img src={fotos[currentIndex]} alt={item.naam}
            style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain" }}
          />
          <button onClick={(e) => { e.stopPropagation(); prev(e); }} style={{
            position: "absolute", top: "50%", left: "20px",
            transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)",
            color: "white", border: "none", padding: "10px 18px",
            fontSize: "24px", cursor: "pointer", borderRadius: "5px"
          }}>‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(e); }} style={{
            position: "absolute", top: "50%", right: "20px",
            transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)",
            color: "white", border: "none", padding: "10px 18px",
            fontSize: "24px", cursor: "pointer", borderRadius: "5px"
          }}>›</button>
          <button onClick={() => setModalOpen(false)} style={{
            position: "absolute", top: "20px", right: "20px",
            background: "white", border: "none", borderRadius: "50%",
            width: "35px", height: "35px", fontSize: "18px", cursor: "pointer"
          }}>✕</button>
        </div>
      )}
    </div>
  );
}