import React, { useEffect, useState } from 'react';
import { fetchSolarSystemBodies } from '../Api/BodiesApi';
import { Bodies } from '../Types/Bodietypes';
import { useNavigate } from 'react-router-dom';
import BodyCard from '../Components/BodyCard';


const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Bodies[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlanets = async () => {
      const planetData = await fetchSolarSystemBodies(3);
      setPlanets(planetData);
    };

    getPlanets();
  }, []);

  
  const handleCardClick = (_planet: Bodies) => {
    navigate(`/Bodies/id`); 
  };


  return (
    <div>
      <h1>Planets</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>
            <BodyCard 
              body={planet} 
              onClick={() => handleCardClick(planet)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
