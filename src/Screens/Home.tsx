import React from "react";
import Card from "../Components/Card/Card";
import useFetchPlanet from "../hooks/usefetch";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { planet, loading, error } = useFetchPlanet(); 
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleCardClick = (planetId: string) => {
    const planets = planet.find(planet => planet.id === planetId); 
    if (planets) { 
      navigate(`/planet/${planetId}`, { state: { planetData: planets } }); 
    }
  };
  

  return (
    <div>
      <h1>Home</h1>
      <div className="card-container">
        {planet.map((planet) => (
          <Card
            key={planet.id}
            name={planet.name}
            density={planet.density}
            gravity={planet.gravity}
            mass={planet.mass}
            id={planet.id}
    
            onClick={() => handleCardClick(planet.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

