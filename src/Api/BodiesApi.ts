export const fetchSolarSystemBodies = async (count: number) => {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/`);
  
    if (!response.ok) {
      throw new Error('Error fetching solar system bodies');
    }
  
    const data = await response.json();
    
    
    return data.bodies.slice(0, count);
  };