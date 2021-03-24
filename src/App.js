import React from 'react';
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import UserProfile from './Components/UserProfile';
import NavBar from './Components/NavBar';

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path="/user/profile"
          render={ () => <UserProfile /> }
        />
      </Switch>
    </Container>
  </>
)

export default App;