import React from "react";
import "./appbar.css";
import TextInput from "./textInput";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categorias = {
  Tecnologia: [
    "Celulares y Smartphones",
    "Computacion",
    "Audio",
    "Video",
    "Consolas y Videojuegos",
    "Camaras y Accesorios",
    "Accesorios para Celulares",
    "Drones y Accesorios",
    "Otros",
  ],
  "Hogar y Electrodomesticos": [
    "Cocina",
    "Electrodomesticos",
    "Limpieza",
    "Muebles",
    "Decoracion para el Hogar",
    "Jardin y Exterior",
    "Herramientas",
    "Otros",
  ],
  "Moda y Belleza": [
    "Ropa y Accesorios",
    "Calzado",
    "Bolsos",
    "Relojes",
    "Joyas y Bijouterie",
    "Salud y Belleza",
    "Otros",
  ],
  "Deportes y Fitness": [
    "Futbol",
    "Basquet",
    "Running",
    "Fitness y Musculacion",
    "Ciclismo",
    "Camping y Pesca",
    "Otros",
  ],
  "Herramientas y Construccion": [
    "Herramientas",
    "Construccion",
    "Electricidad",
    "Pintureria",
    "Plomeria",
    "Otros",
  ],
  "Industrias y Oficinas": [
    "Equipamiento para Industrias",
    "Equipamiento para Oficinas",
    "Insumos",
    "Otros",
  ],
  "Accesorios para Vehiculos": [
    "Accesorios para Autos",
    "Accesorios para Motos",
    "Otros",
  ],
};

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="space-app-bar column">
        <div className="row" id="app-bar-up">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Mercadolibre_textlogo.svg"
              alt=""
              id="logo-app-bar"
            />
          </Link>
          <TextInput
            id="search-app-bar"
            style={{ width: "100%", maxWidth: "600px" }}
            icon={<span className="material-symbols-outlined">search</span>}
            placeholder="Buscar productos, marcas y más..."
          />
          <img
            className="clickable"
            src="https://http2.mlstatic.com/D_NQ_783102-MLA77243951709_062024-OO.webp"
            alt=""
            id="publicity-right"
            onClick={() => {
              toast("Esto es una publicidad, no hay funcionalidad");
            }}
          />
        </div>
        <div className="row" id="app-bar-down">
          <div
            id="position"
            className="row clickable"
            onClick={() => {
              toast(
                "Esto es una configuracion de ubicacion, no hay funcionalidad"
              );
            }}
          >
            <span className="material-symbols-outlined">location_on</span>
            <div className="column" id="nav-ubq">
              <span style={{ fontSize: "0.5rem" }}>Ingresa tu</span>
              <span>ubicacion</span>
            </div>
          </div>
          <div className="nav-filters row">
            <div className="row categories">
              <span className="material-symbols-outlined">arrow_drop_down</span>
              <span>Categorías</span>

              <nav id="nav-categories">
                {Object.keys(categorias).map((a, index) => {
                  return (
                    <span key={index} className="category-span clickable">
                      <p>{a}</p>
                      <div className="category-item column">
                        {categorias[a].map((b: string[], index2: number) => {
                          return <span key={`${index}-${index2}`}>{b}</span>;
                        })}
                      </div>
                    </span>
                  );
                })}
              </nav>
            </div>
            <span>Cupones</span>
            <span>Historial</span>
            <span>Supermercado</span>
            <span>Moda</span>
            <span>Mercado play</span>
            <span>Vender</span>
          </div>
          <div className="row" id="right-content">
            <span>Ingresar</span>
            <span>Registrarse</span>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
