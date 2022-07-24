import React, { Component } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";

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
        <h1>Pick-Me-Up</h1>
        <h2>{this.state.compliment}</h2>
        <h2>{this.state.advice}</h2>
      </main>
    );
  }
}

export default App;
