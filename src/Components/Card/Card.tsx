import React, { useState } from 'react';

interface CardProps {
  id: string;
  name: string;
  density: number;
  gravity: number;
  mass: number;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ name, density, gravity, mass, onClick }) => {
  const [densityValue, setDensityValue] = useState(density);
  const [gravityValue, setGravityValue] = useState(gravity);
  const [massValue, setMassValue] = useState(mass);

  return (
    <div className="card" onClick={onClick}>
      <h2>{name}</h2>
      <div>
        <label>Densidad: {densityValue} kg/m³</label>
        <input type="range" min="0"max="10000"value={densityValue}onChange={(e) => setDensityValue(Number(e.target.value))}/>
      </div>
      <div>
        <label>Gravedad: {gravityValue} m/s²</label>
        <input
          type="range"
          min="0"
          max="50"
          value={gravityValue}
          onChange={(e) => setGravityValue(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Masa: {massValue} kg</label>
        <input
          type="range"
          min="0"
          max="1e30"
          value={massValue}
          onChange={(e) => setMassValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Card;

