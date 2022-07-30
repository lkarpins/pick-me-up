import React, { useState, useEffect } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";

export const App = () => {
  const [compliment, setCompliment] = useState("");
  const [advice, setAdvice] = useState("");
  const [favoriteCompliment, setFavoriteCompliment] = useState<string[]>([]);
  const [favoriteAdvice, setFavoriteAdvice] = useState<string[]>([]);

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
        localStorage.setItem("complimentFavorite", JSON.stringify([...favoriteCompliment, favoriteSelection]))
      } else {
        const filteredFavorites = favoriteCompliment.filter(
          (compliment) => compliment !== favoriteSelection
        );
        setFavoriteCompliment(filteredFavorites);
        localStorage.setItem("complimentFavorite", JSON.stringify(filteredFavorites))
      }
    }
    if (selection === "advice") {
      if (!favoriteAdvice.includes(favoriteSelection)) {
        setFavoriteAdvice([...favoriteAdvice, favoriteSelection]);
        localStorage.setItem("adviceFavorite", JSON.stringify([...favoriteAdvice, favoriteSelection]))
      } else {
        const filteredFavorites = favoriteAdvice.filter(
          (advice) => advice !== favoriteSelection
        );
        setFavoriteAdvice(filteredFavorites);
        localStorage.setItem("adviceFavorite", JSON.stringify(filteredFavorites))
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
