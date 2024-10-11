export interface CleanPlanet {
    id: string;
    name: string;
    density: number;
    gravity: number;
    mass: {
        massValue: number; 
        massExponent: number; 
    }; 
    englishName: string;
    isPlanet: boolean;
    moons: string[] | null; 
    semimajorAxis: number;
    perihelion: number;
    aphelion: number;
    eccentricity: number;
    inclination: number;
}
