import { Image } from "./image";
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar módulos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Gallery = (props) => {
  const chartRefs = useRef([]);

  const exportImages = () => {
    console.log("images", chartRefs.current);
    chartRefs.current.forEach((chart, index) => {
      if (chart) {
        const url = chart.toBase64Image(); // Obtiene la imagen como Base64
        const link = document.createElement("a");
        link.href = url;
        link.download = `chart-${index + 1}.png`; // Nombre del archivo
        link.click();
      }
    });
  };

  useEffect(() => {}, []);

  const chartData = [
    {
      id: 1,
      pregunta: "¿Cuál es tu nivel de conocimiento sobre el suicidio?",
      labels: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
      data: [0, 0, 5, 8, 7],
    },
    {
      id: 2,
      pregunta: "¿Crees que el suicidio se puede prevenir?",
      labels: ["Sí", "No", "No estoy seguro"],
      data: [2, 2, 16],
    },
    {
      id: 4,
      labels: [
        "Problemas Familiares",
        "Problemas Económicos",
        "Enfermedades Mentales",
        "Influencia de redes sociales",
        "Otros",
      ],
      data: [16, 14, 17, 8, 0],
      pregunta:
        "¿Qué factores consideras que pueden contribuir a la ideación suicida?",
    },
    {
      id: 5,
      labels: ["Sí", "No"],
      data: [0, 20],
      pregunta:
        "¿Has tenido alguna formación o capacitación sobre cómo manejar situaciones de riesgo suicida?",
    },
    {
      id: 6,
      labels: ["Positivamente", "Negativamente", "No influye"],
      data: [0, 10, 10],
      pregunta:
        "¿Cómo influye la información en redes sociales sobre el suicidio en tu percepción del tema?",
    },
    {
      id: 7,
      labels: [
        "Prevención del suicidio",
        "Manejo de crisis",
        "Recursos disponibles",
        "Testimonios de superación",
        "Otros",
      ],
      data: [19, 3, 17, 3, 0],
      pregunta: "¿Qué información te gustaría recibir sobre el suicidio?",
    } /*  */,
  ];

  const percentagePlugin = {
    id: "percentagePlugin",
    afterDatasetsDraw(chart) {
      const { ctx, data, chartArea: { top, bottom }, scales: { x, y } } = chart;
  
      data.datasets.forEach((dataset, datasetIndex) => {
        const total = dataset.data.reduce((sum, value) => sum + value, 0);
  
        dataset.data.forEach((value, index) => {
          const percentage = ((value / total) * 100).toFixed(1); // Calcula el porcentaje
          const xPos = x.getPixelForValue(index);
          const barHeight = y.getPixelForValue(0) - y.getPixelForValue(value); // Altura de la barra
          const yPos = y.getPixelForValue(value) + barHeight / 2; // Punto medio de la barra
  
          ctx.save();
          ctx.fillStyle = "black"; // Cambia a blanco para mejor visibilidad
          //ctx.font = "bold 12px Arial";
          ctx.textAlign = "center";
          ctx.fillText(`${percentage}%`, xPos, yPos); // Dibuja en el centro
          ctx.restore();
        });
      });
    },
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Resultados Parciales</h2>
          <p></p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {chartData.map((chart, index) => (
              <div
                key={`chart-${chart.id}`}
                className="col-sm-6 col-md-6 col-xl-10"
              >
                <Bar
                  ref={(el) => {
                    //console.log(el, el.chart);
                    chartRefs.current[index] = el;
                  }}
                  data={{
                    labels: chart.labels,
                    datasets: [
                      {
                        label: chart.pregunta,
                        data: chart.data,
                        backgroundColor: [
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                          "rgba(75, 192, 192, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 99, 132, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: "top" },
                      title: { display: true, text: chart.title },
                    },
                  }}
                  plugins={[percentagePlugin]}
                />
              </div>
            ))}
            {/*  */}
            {/*  {chartData.map((chart, index) => (
              <div key={chart.id} style={{ marginBottom: "20px" }}>
                <canvas
                  ref={(el) => (chartRefs.current[index] = el)}
                  width="400"
                  height="400"
                ></canvas>
              </div>
            ))} */}

            {/*  {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."} */}
          </div>
        </div>
      </div>
    </div>
  );
};
