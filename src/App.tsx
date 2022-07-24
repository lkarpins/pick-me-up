import React, { Component } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import "./App.css";
import { Button } from "./components/Button/Button";

interface Props {}
interface State {
  compliment: string;
  advice: string;
}

class App extends Component<Props, State> {
  state: State = {
    compliment: "",
    advice: "",
  };

  componentDidMount() {
    getCompliments().then((json) => {
      this.setState({ compliment: json.compliment });
    });
    getAdvice().then((json) => {
      this.setState({ advice: json.slip.advice });
    });
  }

  render() {
    return (
      <main className="App">
        <nav>
          <h1 className="logo">PickMeUp</h1>
          <Button label="See Favorites" />
        </nav>
        <div className="app-container">
          <div className="selections compliment-section">
            <h2>{this.state.compliment}</h2>
            <Button label="Get Compliment" />
          </div>
          <div className="selections advice-section">
            <h2>{this.state.advice}</h2>
            <Button label="Get Advice" />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
