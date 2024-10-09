import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

import "./advertising.css";
import CardAdvertising from "../../components/products/card_advertising";

const images = [
  "https://http2.mlstatic.com/D_NQ_875821-MLA79236911555_092024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_764150-MLA76969903483_062024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_704286-MLA79236581875_092024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_608601-MLA79236807385_092024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_829681-MLA78996971540_092024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_699506-MLA79236809801_092024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_851683-MLA79236908205_092024-OO.webp",
];

const advertising = [
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
  {
    tittle: "Envio gratis",
    description: "Beneficio para los nuevos compradores",
    img: (
      <img
        src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg"
        alt="advertising"
      />
    ),
    textButton: "Mas informacion",
  },
];

const Advertising = () => {
  const amount = images.length;
  const [numberShowed, setNumberShowed] = useState(0);
  const [intervalActive, setIntervalActive] = useState(true);
  const [carruselAdvertising, setCarruselAdvertising] = useState(0);

  const changeNumberShow = (i) => {
    let tempNumberImg = numberShowed + i;
    // Asegurarse de que tempNumberImg esté dentro de los límites
    if (tempNumberImg < 0) tempNumberImg = amount - 1;
    if (tempNumberImg >= amount) tempNumberImg = 0;
    setNumberShowed(tempNumberImg);
  };

  const changeCarruselAdvertising = (i) => {
    let tempCarrusel = carruselAdvertising + i;
    // Asegurarse de que tempCarrusel esté dentro de los límites
    if (tempCarrusel < 0) tempCarrusel = 0; // No permitir menos que 0
    if (tempCarrusel >= advertising.length)
      tempCarrusel = advertising.length - 1; // Limitar al último
    setCarruselAdvertising(tempCarrusel);
  };

  useEffect(() => {
    const divImages = document.getElementById("div-advertising-img");
    const handleMouseEnter = () => setIntervalActive(false);
    const handleMouseLeave = () => setIntervalActive(true);

    divImages?.addEventListener("mouseenter", handleMouseEnter);
    divImages?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      divImages?.removeEventListener("mouseenter", handleMouseEnter);
      divImages?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (intervalActive) changeNumberShow(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [intervalActive]);

  return (
    <section id="advertising">
      <div className="div-advertising-img" id="div-advertising-img">
        <div className="div-images" id="div-images">
          {images.map((image, index) => {
            let relativePosition = index - numberShowed;

            // Hacer la posición circular
            if (relativePosition > Math.floor(amount / 2)) {
              relativePosition -= amount;
            }
            if (relativePosition < -Math.floor(amount / 2)) {
              relativePosition += amount;
            }

            return (
              <img
                key={index}
                src={image}
                alt={`advertising-${index}`}
                style={{
                  transform: `translateX(${relativePosition * 100}%)`, // Usamos el valor multiplicado por 100% para el desplazamiento
                  transition: "transform 0.2s ease", // Animación suave
                  position: "absolute",
                  width: "100%", // Asegúrate de que cada imagen ocupe el ancho completo
                  height: "100%", // Para que se ajuste al contenedor
                  objectFit: "cover", // Para mantener la relación de aspecto
                  visibility:
                    Math.abs(relativePosition) <= 1 ? "visible" : "hidden", // Mostrar solo las imágenes cercanas
                }}
              />
            );
          })}
        </div>
        <div className="row div-buttons">
          <span
            className="material-symbols-outlined"
            style={{ rotate: "180deg" }}
            onClick={() => {
              changeNumberShow(-1);
            }}
          >
            arrow_forward_ios
          </span>
          <span
            onClick={() => {
              changeNumberShow(1);
            }}
            className="material-symbols-outlined"
          >
            arrow_forward_ios
          </span>
        </div>
      </div>
      <div className="container-carrusel">
        <div className="row div-buttons">
          <span
            className="material-symbols-outlined"
            style={{ rotate: "180deg" }}
            onClick={() => {
              changeCarruselAdvertising(-1);
            }}
          >
            arrow_forward_ios
          </span>
          <span
            onClick={() => {
              changeCarruselAdvertising(1);
            }}
            className="material-symbols-outlined"
          >
            arrow_forward_ios
          </span>
        </div>
        <div
          className="div-advertising"
          style={{
            display: "flex",
            transform: `translateX(-${carruselAdvertising * 100}%)`, // Ajusta según el número de elementos visibles
            transition: "transform 0.5s",
            width: "100%",
          }}
        >
          {advertising.map((adv, index) => (
            <div key={index} className="div-card">
              <CardAdvertising
                img={adv.img}
                tittle={adv.tittle}
                textButton={adv.textButton}
                description={adv.description}
                url="/"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertising;
