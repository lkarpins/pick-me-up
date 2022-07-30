import React, { useState, useEffect } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";
import { useLocalStorage } from "./utilities/useLocalStorage";

export const App = () => {
  const [compliment, setCompliment] = useState("");
  const [advice, setAdvice] = useState("");
  const [favoriteCompliment, setFavoriteCompliment] = useLocalStorage(
    "complimentFavorite",
    []
  );
  const [favoriteAdvice, setFavoriteAdvice] = useLocalStorage(
    "adviceFavorite",
    []
  );

  useEffect(() => {
    getCompliments().then((json) => {
      setCompliment(json.compliment);
    });
    getAdvice().then((json) => {
      setAdvice(json.slip.advice);
    });
  }, []);

  const getNewCall = async (selection: string) => {
    if (selection === "compliment") {
      await getCompliments().then((json) => {
        setCompliment(json.compliment);
      });
    }
    if (selection === "advice") {
      await getAdvice().then((json) => {
        setAdvice(json.slip.advice);
      });
    }
  };

  const toggleFavorites = (selection: string, favoriteSelection: string) => {
    if (selection === "compliment") {
      if (!favoriteCompliment.includes(favoriteSelection)) {
        setFavoriteCompliment([...favoriteCompliment, favoriteSelection]);
        return true;
      } else {
        const filteredFavorites = favoriteCompliment.filter(
          (compliment: string) => compliment !== favoriteSelection
        );
        setFavoriteCompliment(filteredFavorites);
        return false;
      }
    } else if (selection === "advice") {
      if (!favoriteAdvice.includes(favoriteSelection)) {
        setFavoriteAdvice([...favoriteAdvice, favoriteSelection]);
        return true;
      } else {
        const filteredFavorites = favoriteAdvice.filter(
          (advice: string) => advice !== favoriteSelection
        );
        setFavoriteAdvice(filteredFavorites);
        return false;
      }
    }
  };
  return (
    <main className="App">
      <Navigation label="See Favorites" />
      <Routes
        getNewCall={getNewCall}
        compliment={compliment}
        advice={advice}
        toggleFavorites={toggleFavorites}
        favoriteCompliment={favoriteCompliment}
        favoriteAdvice={favoriteAdvice}
      />
    </main>
  );
};

export default App;
