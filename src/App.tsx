import React, { useState, useEffect } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";
import { useLocalStorage } from "./utilities/useLocalStorage";
import { execute, executeAsync } from "./utilities/exceptionHandlers";
import { ErrorView } from "./components/ErrorView/ErrorView";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
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
  const [error, setError] = useState(new Error());

  useEffect(() => {
    getNewCall("compliment");
    getNewCall("advice");
  }, []);

  const getNewCall = async (selection: string) => {
    if (selection === "compliment") {
      const [res, err] = await executeAsync(getCompliments);
      if (err) {
        return setError(err);
      }
      setCompliment(res.compliment);
    }
    if (selection === "advice") {
      const [res, err] = await executeAsync(getAdvice);
      if (err) {
        return setError(err);
      }
      setAdvice(res.slip.advice);
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
      <ErrorBoundary FallbackComponent={ErrorView}>
        <Navigation label="See Favorites" />
        <Routes
          error={error}
          getNewCall={getNewCall}
          compliment={compliment}
          advice={advice}
          toggleFavorites={toggleFavorites}
          favoriteCompliment={favoriteCompliment}
          favoriteAdvice={favoriteAdvice}
        />
      </ErrorBoundary>
    </main>
  );
};

export default App;
