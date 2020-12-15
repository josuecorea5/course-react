// const element = document.createElement("h1");
// element.innerHTML = "Hello, Platzi Badges!";

// //Donde queremos poner este elemento
// const container = document.getElementById("app");

// //Añadiendo el elemento al container
// container.appendChild(element);

//Haciendo lo mismo pero utilizando React.
import React from "react";
import ReactDom from "react-dom";
import Badges from "./components/Badge";
//Esto es JSX
// const jsx = <h1>Hello Platzi, Badges</h1>;
//Su alternativa
// const element = React.createElement("h1", {}, "Holo soy los childrens!");
//elemento con props
// const elementProps = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi"
// );
//utilizando varibales como elemento
// const name = "Valentina";
// const element = <h1> Hola me llamo {name}</h1>;
// const jsx = (
//   <div>
//     <h1>Hola, soy David</h1>
//     <p>Ahora es mi cumpleaños numero 20</p>
//   </div>
// );

const container = document.getElementById("app");

// ReactDom.render(__queRenderizar__,__dondeRenderizar__);

ReactDom.render(<Badges />, container);
