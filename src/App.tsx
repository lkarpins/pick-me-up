import React, { useState, useEffect } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";

export const App = () => {
  const [compliment, setCompliment] = useState("");
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getCompliments().then((json) => {
      setCompliment(json.compliment);
    });
    getAdvice().then((json) => {
      setAdvice(json.slip.advice);
    });
  }, []);

  async function getNewCall(selection: string) {
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
  }

  return (
    <main className="App">
      <Navigation label="See Favorites" />
      <Routes getNewCall={getNewCall} compliment={compliment} advice={advice} />
    </main>
  );
};

export default App;
