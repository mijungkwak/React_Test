import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {

  function querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");
  
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);
  
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return "";
    }
  
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <Redirect
              to={`/login?redirect=${props.location.pathname}${props.location
                .search}`}
            />}
    />
  );
}