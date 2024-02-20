// Importo las librerias de React.js

import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0";

// Agarro el <div> con id = "app" para luego trabajar con él.

const appDomElement = document.getElementById('app');

// Creo las constantes y luego los elementos...
// La constante root siempre hay que crearla porque es de donde empieza React.

const root = ReactDOM.createRoot(appDomElement);

// (Tipo de elemento, propiedades del elemento, y texto)

const button = React.createElement("button", {"data-id": 123}, "Button 1");
const button2 = React.createElement("button", {"data-id": 456}, "Button 2");
const button3 = React.createElement("button", {"data-id": 789}, "Button 3");

/* Creando una constante div podemos juntar los botones y renderizarlos, ya que renderizar varios
objetos no se puede...
*/

//const div = React.createElement("div", null, [button, button2, button3]);
//root.render(div);

/* Pero hay una forma mejor de juntar los elementos ya que no hay que acumular codigo HTML y hay
que dejarlo lo más limpio posible...
*/

const app = React.createElement(React.Fragment, null, [button, button2, button3]);

// Renderizamos el elemento para que aparezca en pantalla.
/* root.render no puede reenderizar cadenas de texto html, solo renderiza elementos
(por temas de seguridad)
*/

root.render(app);
