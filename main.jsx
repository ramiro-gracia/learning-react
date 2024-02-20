import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import './TwitterFollowCard.jsx'
import {App} from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

/* Los componentes tienen que ser *PascalCase (empizan con mayuscula)
*PascalCase
*camelCase
*snake_case
*kebab-case
Esto es así porque es la única forma que React tiene de difereniar si lo que escribimos es HTML o un componente.
*/

/*
Un componente es una factoría de elementos.
El elemento es lo que renderiza React.
Los componentes son funciones que devuelven elementos.
*/
root.render(
  <App />
)
