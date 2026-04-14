import React from "react";
import Navbar from "../components/Navbar";

export default function DienstenPage() {
  return (

    <div className="main-wrapper mx-auto p-2 bg-light rounded shadow" style={{ maxWidth: '1150px' }}>
        

        {/* foto */}
        <section
            className="rounded mb-2"
            style={{
            backgroundImage: 'url(https://www.stoffeerderijbonte.nl/images/ons_bg_1075.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        ></section>

        <Navbar />



        <section className="mb-5">
        <h2 className="header-text mb-3 mt-3 text-center">Diensten</h2>
        <div className="row">
            <div className="col-md-4 mb-3">
            <div className="info-col card h-100 shadow-sm">
                <div className="card-body">
                <h5 className="card-title">Meubelstoffering</h5>
                <p className="card-text">Herstofferen van stoelen, banken TEXT</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className="info-col card h-100 shadow-sm">
                <div className="card-body">
                <h5 className="card-title">Restauratie</h5>
                <p className="card-text">Reparaties TEXT</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className="info-col card h-100 shadow-sm">
                <div className="card-body">
                <h5 className="card-title">Losse verkoop</h5>
                <p className="card-text">Kussens, stoelen of banken TEXT </p>
                </div>
            </div>
            </div>
        </div>
        </section>


    </div>
  );
}
