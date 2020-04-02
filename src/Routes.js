import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
    return (
      <Switch>  {/* 해당 컴포넌트 내에 정의된 첫번째일치경로 렌더링 */}
        {/* <AppliedRoute path="/" exact component={Home} appProps={appProps} /> */}
        {/* "/"와 일치하면 Home컴포넌트 찾아감 */}
        <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
        <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
        <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />

        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
  }