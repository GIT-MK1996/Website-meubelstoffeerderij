import React from "react";
import Navbar from "../components/Navbar";

export default function OverOnsPage() {
  return (
    <div
      className="main-wrapper mx-auto p-2 bg-light rounded shadow"
      style={{ maxWidth: '1150px' }}
    >
      {/* Bovenste foto */}
      <section
        className="rounded mb-2"
        style={{
          backgroundImage:
            'url(https://www.stoffeerderijbonte.nl/images/atelier_bg_1075.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'whitesmoke',
          textShadow: '1px 1px 5px rgba(0,0,0,0.7)',
        }}
      ></section>

      <Navbar />

      {/* Inhoud - Even voorstellen */}
      <section className="mb-5">
        <h2 className="header-text text-center mb-4 mt-4">Even voorstellen</h2>
        <p className="text-voorstel text-center fs-5 mb-4">
            In 1994 hebben wij onze meubelstoffeerderij geopend. De afgelopen 30 jaar hebben wij een divers aanbod van zitmeubelen (design, klassiek en modern) gerestaureerd en gestoffeerd en daarmee een uitgebreide expertise opgebouwd.
            Bij "Resultaten" kunt u daarvan een presentatie bekijken.

            Wij staan voor kwaliteit, duurzaamheid en service en werken uitsluitend met hoogwaardige materialen.

            Wij geven 3 jaar garantie op ons stoffeerwerk.
        </p>
        <div className="row">
          {/* rita */}
          <div className="col-md-6 mb-4">
            <div className="info-col card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Rita Bonte</h4>
                <p className="card-text">
                  text
                </p>
                <img 
                   src="https://www.stoffeerderijbonte.nl/images/rita_ons.jpg" 
                   alt="Rita Bonte"
                   className="img-fluid rounded mt-3"
                   style={{maxHeight: '150px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>

          {/* klaas */}
          <div className="col-md-6 mb-4">
            <div className="info-col card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Klaas Kuijt</h4>
                <p className="card-text">
                  text
                </p>
                <img 
                   src="https://www.stoffeerderijbonte.nl/images/klaas_ons3.jpg" 
                   alt="Klaas Kuijt"
                   className="img-fluid rounded mt-3"
                   style={{maxHeight: '150px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
