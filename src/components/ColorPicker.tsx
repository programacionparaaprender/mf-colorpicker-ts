import React from 'react';
import './ColorPicker.css';

// Definimos la interfaz para las props
interface ColorPickerProps {
  color: string;
  colorListado: string[]; // Aunque no se use en el JSX, puede que se necesite para lógica futura
  handleChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitSaveColor: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ 
  color, 
  colorListado, 
  handleChangeColor, 
  handleSubmitSaveColor 
}) => {
  return (
    <form onSubmit={handleSubmitSaveColor}>
      <input 
        value={color}
        type="color" 
        onChange={handleChangeColor}
        className="form-control colorPicker"
        title="Seleccione un color..." 
      />
      <div className="text-center">
        <h2 className="mt-3 fw-bolder">
          <div id="colorBolita" className="textoColorpicker"></div>
          {color}
        </h2>
        <button type="submit" className="btn btn-success">
          Guardar color
        </button>
      </div>
    </form>
  );
}

export default ColorPicker;