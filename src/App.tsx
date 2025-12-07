import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import useColors from "./hooks/useColors";
import ColorPicker from "./components/ColorPicker";
// Ahora:
import { createRoot } from "react-dom/client";

const App = () => {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor} = useColors();
  return (
    <div className="container">
      <ColorPicker 
        color={color} 
        colorListado={colorListado} 
        handleChangeColor={handleChangeColor} 
        handleSubmitSaveColor={handleSubmitSaveColor} />
    </div>
  );
};
// Usar createRoot en lugar de ReactDOM.render
const container = document.getElementById("app");

if (!container) {
  throw new Error("No se encontró el elemento con id 'app'");
}

const root = createRoot(container);
root.render(<App />);
