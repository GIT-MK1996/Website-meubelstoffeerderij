import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Styles.css';


export default function HomePage() {
  return (

    <div className="main-wrapper mx-auto p-2 bg-light rounded shadow" style={{ maxWidth: '1150px' }}>
        

        {/* foto */}
        <section
            className="rounded mb-2"
            style={{
            backgroundImage: 'url(https://www.stoffeerderijbonte.nl/images/home_bg_1075.jpg)',
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

        {/* Welkom */}
        <section className="py-4">
            <h2 className="mb-2 text-center header-text">Welkom</h2>
            <p className="text-center fs-5 mb-4">
                Wij zijn gespecialiseerd in het stofferen en restaureren van moderne,
                design- en klassieke meubelen.
            </p>

            <div className="mt-3 row justify-content-center">
            {/* Openingstijden */}
            <div className="col-md-5 mb-3">
                <div className="info-col p-3 border rounded shadow-sm h-100">
                <h5 className="header-text mb-3">Openingstijden</h5>
                <table className="table table-sm mb-0">
                    <tbody className='fs-5'>
                    <tr>
                        <td>Maandag</td>
                        <td>Gesloten</td>
                    </tr>
                    <tr>
                        <td>Dinsdag</td>
                        <td>10:00 - 17:00</td>
                    </tr>
                    <tr>
                        <td>Woensdag</td>
                        <td>10:00 - 17:00</td>
                    </tr>
                    <tr>
                        <td>Donderdag</td>
                        <td>10:00 - 17:00</td>
                    </tr>
                    <tr>
                        <td>Vrijdag</td>
                        <td>10:00 - 17:00</td>
                    </tr>
                    <tr>
                        <td>Zaterdag</td>
                        <td>11:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>Zondag</td>
                        <td>Gesloten</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            {/* Adres & contact */}
            <div className="col-md-5 mb-3">
              <div className="info-col p-3 border rounded shadow-sm h-100 ">
                <h5 className="header-text mb-3">Adres & Contact</h5>
                <p className="mb-2 fs-5">
                    Klarendalseweg 136
                    <br />
                    6822 GG
                </p>
                <p className="mb-2 fs-5">Tel: 06-33807866</p>
                <p className="mb-0 fs-5">E-mail: meubel@stoffeerderijbonte.nl</p>
                </div>
              </div>
            </div>
        </section>
    </div>
    
  );
}






















