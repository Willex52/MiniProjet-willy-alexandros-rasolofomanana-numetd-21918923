import React from "react";
import "./App.css";
import './styles/layout.scss';
import './styles/theme.scss';
import './styles/ui.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Switch>
            <PrivateRoute path="/" component={BaseLayout} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
