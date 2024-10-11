export interface Bodies {
    id: string,
    name: string,
    englishName: string,
    isPlanet: boolean
    moons: { moon: string, rel: string}
    semimajorAxis: number,
    perihelion: number,
    aphelion: number,
    eccentricity: number,
    inclination: number,
    density: number
    gravity: number
    mass: { massValue: number, massExponent: number}
  }



