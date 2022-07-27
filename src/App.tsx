import React, { Component } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";

interface Props {}
interface State {
  compliment: string;
  advice: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      compliment: "",
      advice: "",
    };
  }

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
        <Navigation label="See Favorites" />
        <Routes compliment={this.state.compliment} advice={this.state.advice} />
      </main>
    );
  }
}

export default App;
