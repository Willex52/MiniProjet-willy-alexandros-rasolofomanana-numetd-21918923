import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Intro from './Intro'


export default class IntroRoute extends Component {
  
  render() {
    const { match } = this.props;
    return (
      <Switch>
          <Route path={`${match.url}`} component={Intro} exact />
      </Switch>
    );
  }
}