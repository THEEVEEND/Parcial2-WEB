import React, { useEffect, useState } from 'react';
import { fetchSolarSystemBodies } from '../Api/BodiesApi';
import { Bodies } from '../Types/Bodietypes';


const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Bodies[]>([]);
  

  useEffect(() => {
    const getPlanets = async () => {
      const planetData = await fetchSolarSystemBodies(1);
      setPlanets(planetData);
    };

    getPlanets();
  }, []);

  return (
    <div>
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>
            <h1>{planet.name}</h1>
            <p>ID:{planet.id}</p>
            <input type="range" value={planet.mass.massValue} />

            <p>englishName:{planet.englishName}</p>
            <p>Moons: {planet.moons ? planet.moons.moon : 'No moons'}</p>
            <p>Semimajor Axis:{planet.semimajorAxis} km</p>
            <p>Perihelion: {planet.perihelion} km</p>
            <p>Aphelion: {planet.aphelion} km</p>
            <p>Eccentricity:{planet.eccentricity}</p>
            <p>Inclination {planet.inclination}°</p>
            <p>Density: {planet.density} g/cm³</p>
            <p>Gravity:{planet.gravity} m/s²</p>
            <p>Mass: {planet.mass.massValue} x 10^{planet.mass.massExponent} kg</p>
          </li>

        ))}
      </ul>
      
    </div>
  );
};

export default Planets;
