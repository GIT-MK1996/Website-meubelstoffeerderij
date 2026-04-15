import React from "react";
import Navbar from "../components/Navbar";


const fabricSuppliers = [
  {
    name: 'Ohmann leather',
    url: 'https://www.ohmannleather.com/collectie/',
    img: '/Website-meubelstoffeerderij/Fotos/logos/ohman-leather.jpg',
  },
  {
    name: 'Nya nordiska',
    url: 'https://www.nya.com/en/product-catalogue/',
    img: '/Website-meubelstoffeerderij/Fotos/logos/nya-nordiska.jpg',
  },
  {
    name: 'De ploeg',
    url: 'https://deploeg.com/collectie/?f-stof=nieuw',
    img: '/Website-meubelstoffeerderij/Fotos/logos/de-ploeg.jpg',
  },
  {
    name: 'Kvadrat',
    url: 'https://www.kvadrat.dk/nl/products/meubelstoffen?srsltid=AfmBOorV0taTrV6UGkFe7zM_xBy--LVm5KHxWoScEmSq6i9SIYcBZ5SR',
    img: '/Website-meubelstoffeerderij/Fotos/logos/Kvadrat-logo.jpg',
  },
  {
    name: 'Danish art weaving',
    url: 'https://danishartweaving.com/daw/produkter/moebelstof',
    img: '/Website-meubelstoffeerderij/Fotos/logos/danish-art-weaving.jpg'
  }
];


export default function StoffenPage() {
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
            "url(https://www.stoffeerderijbonte.nl/images/stoffen_bg_1075.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "whitesmoke",
          textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
        }}
      ></section>

      <Navbar />

      <section className="mb-5">
        {/* Uitleg over stoffen */}
        <h2 className="text-center header-text mb-4 mt-3">Onze Stoffen</h2>
        <p className="text-center fs-5 mx-auto mb-5" style={{ maxWidth: "900px" }}>
          Wij werken met hoogwaardige meubelstoffen van gerenommeerde
          leveranciers. Hieronder kunt u een selectie bekijken van onze vaste
          stoffenpartners. Door op het logo te klikken, wordt u doorgestuurd
          naar hun website waar u het volledige stoffenaanbod kunt bekijken.
        </p>

        {/* Leveranciers */}
        <div className="row justify-content-center g-4">
          {fabricSuppliers.map((supplier, index) => (
            <div className="col-6 col-md-3 text-center" key={index}>
              <a  href={supplier.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={supplier.img}
                  alt={supplier.name}
                  className="img-fluid supplier-logo rounded shadow-sm"
                  style={{ maxHeight: "100px", objectFit: "contain" }}
                />
              </a>
              <p className="mt-2 supplier-name">{supplier.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
