import React from 'react'

const getColors = () => {
  let colors = localStorage.getItem('colors');
  if(colors == null){
    return [];
  }
  return JSON.parse(colors);
}

export const getLastColors = () => {
    const listColor = getColors();
    return listColor[0] || "#732812";
}

export default getColors;