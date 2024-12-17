import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const images = [
    "../img/custom/bg.jpg",
    "../img/custom/bg1.jpeg",
    "../img/custom/bg2.jpeg",
    "../img/custom/back_san.jpg",
  ];

  // Estado para manejar el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambiar la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambiar cada 5000 ms (5 segundos)

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [images.length]);

  const containerStyle = {
    background: `url(${images[currentImageIndex]}) center center no-repeat`,
  };

  return (
    <header id="header">
      <div className="intro" style={containerStyle}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Saber Más
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
