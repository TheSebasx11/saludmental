import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar módulos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const Services = (props) => {
  const pieData = [
    {
      id: 1,
      labels: ["16 - 19 años", "20 - 29 años", "30 - 39 años", "40 - 49 años"],
      data: [5, 9, 5, 5],
      title: "Edad de los encuestados",
    },
    {
      id: 2,
      labels: ["Femenino", "Masculino"],
      data: [12, 8],
      title: "Género de los encuestados",
    },
    {
      id: 3,
      labels: ["Primaria", "Bachillerato"],
      data: [11, 99],
      title: "Nivel Educativo de los encuestados",
    },
    {
      id: 4,
      labels: ["Ama de Casa", "Independiente", "Comerciante"],
      data: [12, 4, 4],
      title: "Ocupación de los encuestados",
    },
    {
      id: 5,
      labels: ["Barrio Fernan Fortich"],
      data: [20],
      title: "Barrio de los encuestados",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Cuestionario sobre conocimiento y actitudes hacia el suicidio</h2>
          <p>Para nosotros es importante saber como te sientes.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfskSgxye0y9hNeliICaSEC1MlTU7uIcUtxkgNfotiAH6nmMg/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={d.icon}></i>
                  </a>
                  <div
                    className="service-desc"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <h2>Informacion sociodemografica</h2>
        <p>Distribucion de la poblacion</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1em",
            padding: "1em",
          }}
        >
          {pieData.map((chart) => (
            <div
              key={`chart-${chart.id}`}
              style={{
                background: "#000127FF",
                borderRadius: "1.5em",
                padding: "1em",
              }}
            >
              <h3>{chart.title}</h3>
              <Pie
                data={{
                  labels: chart.labels,
                  datasets: [
                    {
                      data: chart.data,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "top" },
                    title: { display: false },
                    datalabels: {
                      formatter: (value, ctx) => {
                          let sum = 0;
                          let dataArr = ctx.chart.data.datasets[0].data;
                          dataArr.forEach(data => {
                              sum += data;
                          });
                          let percentage = (value*100 / sum).toFixed(2)+"%";
                          return percentage;
                      },
                      color: '#fff',
                  }
                  },
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
