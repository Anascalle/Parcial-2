import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { planetData } = location.state || {}; 

  if (!planetData) {
    return <p>No planet data received</p>;
  }

  return (
    <div>
      <h2>{planetData.name}</h2>
      <p>Nombre en inglés: {planetData.englishName}</p>
      <p>¿Es un planeta? {planetData.isPlanet ? 'Sí' : 'No'}</p>
      <p>Número de lunas: {planetData.moons ? planetData.moons.length : 0}</p>
      <p>Eje semi-mayor: {planetData.semimajorAxis} km</p>
      <p>Perihelio: {planetData.perihelion} km</p>
      <p>Aphelio: {planetData.aphelion} km</p>
      <p>Eccentricidad: {planetData.eccentricity}</p>
      <p>Inclinación: {planetData.inclination}°</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  
  
  );
};

export default Detail;

