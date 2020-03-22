import { Route } from "react-router-dom";
import React from "react";

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => (
            <Component {...props} />
          ) 
        }
      />
    );
  }