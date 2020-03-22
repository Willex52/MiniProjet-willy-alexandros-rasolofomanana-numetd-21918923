import React from "react";
import "./App.css";
import './styles/layout.scss';
import './styles/theme.scss';
import './styles/ui.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';

function App() {
  let nom = "Hello Madagascar";

  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={BaseLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
