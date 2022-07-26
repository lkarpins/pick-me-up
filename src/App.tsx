import React, { Component } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Routes } from "./components/Routes/Routes";




interface Props { }
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
        <nav>
          <h1 className="logo">PickMeUp</h1>
          <Button label="See Favorites" />
        </nav>
        <Routes compliment={this.state.compliment} advice={this.state.advice} />
      </main>
    );
  }
}

export default App;
