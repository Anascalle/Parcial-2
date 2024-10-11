import { useState, useEffect } from 'react';
import { CleanPlanet } from '../Types/types';
import { fetchCleanData } from '../sevices/apiservices';

const useFetchPlanet = () => {
  const [planet, setPlanet] = useState<CleanPlanet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchCleanData();
        setPlanet(data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { planet, loading, error };
};

export default useFetchPlanet;










