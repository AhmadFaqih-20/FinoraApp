import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  rating: {
    average: number | null;
  };
  summary: string | null;
}

const HomePage = () => {
  const [movies, setMovies] = useState<Show[]>([]);
  const fetchMovies = async (): Promise<Show[]> => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows/?page=1");

      if (!response.ok) {
        throw new Error("Failed to fetch shows");
      }

      const data: Show[] = await response.json();

      return data.slice(0, 3);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadShows();
  }, []);

};

const dashboard = () => {
  return (
    <View>
      <Text>dashboard</Text>
    </View>
  )
}

export default dashboard