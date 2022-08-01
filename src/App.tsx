import React, { useState, useEffect } from "react";
import { getCompliments, getAdvice } from "./utilities/apiCalls";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";
import { useLocalStorage } from "./utilities/useLocalStorage";
import { executeAsync } from "./utilities/exceptionHandlers";
import { ErrorView } from "./views/ErrorView/ErrorView";
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

  const toggleCompliment = (favoriteSelection: string) => {
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
  };

  const toggleAdvice = (favoriteSelection: string) => {
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
  };

  const toggleFavorites = (selection: string, favoriteSelection: string) => {
    if (selection === "compliment") {
      return toggleCompliment(favoriteSelection);
    } else if (selection === "advice") {
      return toggleAdvice(favoriteSelection);
    }
  };
  return (
    <main className="App">
      <ErrorBoundary FallbackComponent={ErrorView}>
        <Navigation />
        <Routes
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
