import React, { useEffect, useState } from 'react';
import getColors, { getLastColors } from '../helpers/getColors';

const useColors = () => {
    const [color, setColor] = useState(getLastColors());
    const [colorListado, setColorListado] = useState(getColors());
    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
      let colorBolita = document.getElementById('colorBolita');
      if(colorBolita == null){
        return;
      }
      colorBolita.style.backgroundColor = e.target.value;
    }
  
    
    const handleSubmitSaveColor = (e: React.FormEvent) => {
      e.preventDefault();
      const copyList = [color, ...colorListado];
      setColorListado(copyList);
    }

    useEffect(()=>{
      localStorage.setItem('colors', JSON.stringify(colorListado));
    }, [colorListado]);

    return {
        color, colorListado, handleChangeColor, handleSubmitSaveColor
    };
}

export default useColors;