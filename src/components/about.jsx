import React, { useState } from "react";

export const About = (props) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="about">
      <div className="container">
        <h2>Psicoeducación sobre algunas problematicas</h2>
        <h3>{props.data ? props.data.paragraph : "loading..."}</h3>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/*  <div
            className="col-xs-12 col-md-6"
            style={{
              border: "1px solid black",
            }}
          > */}
          <img
            src="img/custom/infografia.png"
            className="img-responsive"
            style={{
              width: "70%",
              objectFit: "contain",
            }}
            alt=""
          />{" "}
        </div>
      </div>
      {/* ------------- */}
      <br />
      <br />
      <div className="container">
        <h2>Rutas de Atencion </h2>
        <h3>Rutas hechas para ti</h3>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <div>
              <button
                onClick={() => toggleItem(0)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px",
                  background:
                    openIndex === 0
                      ? "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)"
                      : "#f0f0f0",
                  border: "1px solid #ddd",
                  color: openIndex === 0 ? "white" : "",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Ruta #1</div> <i class="fa fa-chevron-down"></i>
                </div>
              </button>
              {openIndex === 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderTop: "none",
                  }}
                >
                  <img
                    src="img/custom/Ruta 1.jpeg"
                    className="img-responsive"
                    style={{
                      width: "70%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleItem(1)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px",
                  background:
                    openIndex === 1
                      ? "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)"
                      : "#f0f0f0",
                  border: "1px solid #ddd",
                  color: openIndex === 1 ? "white" : "",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Ruta #2</div> <i class="fa fa-chevron-down"></i>
                </div>
              </button>
              {openIndex === 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderTop: "none",
                  }}
                >
                  <img
                    src="img/custom/Ruta 2.jpeg"
                    className="img-responsive"
                    style={{
                      width: "70%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
