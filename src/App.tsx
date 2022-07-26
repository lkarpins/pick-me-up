import React, { Component } from "react";
import { getCompliments, getAdvice } from "./ApiCalls";
import "./App.css";
import { Button } from "./components/Button/Button";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { ComplimentContainer } from "./components/ComplimentContainer/ComplimentContainer";
import { AdviceContainer } from "./components/AdviceContainer/AdviceContainer";
import { Route, Switch, BrowserRouter } from 'react-router-dom';


interface Props { }
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <AppContainer />
            </Route> 
            <Route exact path="/complimentcontainer">
              <ComplimentContainer compliment={this.state.compliment}/>
            </Route>
            <Route exact path="/advicecontainer">
              <AdviceContainer advice={this.state.advice}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
