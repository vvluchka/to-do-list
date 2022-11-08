import React, { useState, useEffect } from "react";
import TodoApp from "Pages/TodoApp/TodoApp";
import LogIn from "Pages/LogIn/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (


    <Router>
      <Switch>
        <Route path="/" component={LogIn} exact/>
        <Route path="/todo" component={TodoApp}/>
      </Switch>
    </Router>
  );
};

export default App;
