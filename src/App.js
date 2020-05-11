import React from "react";
import "./App.css";
import Location from "./pages/home/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Location} />

            <Route>
              <h3>404 Not Found</h3>
              <h1>¯\_(ツ)_/¯</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
