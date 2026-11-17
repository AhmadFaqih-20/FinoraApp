import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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

interface SearchResult {
  score: number;
  show: Show;
}

const SEARCH_DEBOUNCE_MS = 400;

const HomePage = () => {
  const [movies, setMovies] = useState<Show[]>([]);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trimmedQuery = query.trim();

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

  const searchMovie = async (searchTerm: string): Promise<Show[]> => {
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}'
    );

    if (!response.ok) {
      throw new Error("Failed to search shows");
    }
    const data: SearchResult[] = await response.json();

    return data.map((result) => result.show);
  };

  useEffect(() => {

  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadShows = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = trimmedQuery
          ? await searchMovie(trimmedQuery)
          : await fetchMovies();

        if (!cancelled) {
          setMovies(data);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setMovies([]);
          setError("Something went wrong. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    // Debounce typed searches; load populer shows immediately
    const timeout = setTimeout(
      loadShows,
      trimmedQuery ? SEARCH_DEBOUNCE_MS : 0,
    );

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [trimmedQuery]);

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadShows();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>

      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchInput: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#3333335c",
    marginBottom: 20,
  },
  searchInputFocused: {
    borderColor: "#6D63FF",
  },
  loader: {
    marginBottom: 16,
  },
  message: {
    textAlign: "center",
    opacity: 0.5,
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  cardPressed: {
    opacity: 0.6,
  },
  image: {
    width: 80,
    height: 110,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomePage