import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MembresMetallica from './MembresMetallica'


export default class MembresMetallicaRoute extends Component {
  
  render() {
    const { match } = this.props;
    return (
      <Switch>
          <Route path={`${match.url}`} component={MembresMetallica} exact />
      </Switch>
    );
  }
}