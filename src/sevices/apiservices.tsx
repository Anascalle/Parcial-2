import { CleanPlanet } from "../Types/types";

export const fetchCleanData = async (): Promise<CleanPlanet[]> => {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const cleanData: CleanPlanet[] = data.bodies
     
      .map((planet: any) => ({
        id: planet.id,
        name: planet.englishName,
        isPlanet: planet.isPlanet,
        diameter: planet.meanDiameter,
        density: planet.meanDensity,
        gravity: planet.gravity,
       
      }));

    return cleanData;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
};

