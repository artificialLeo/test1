import React from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import UserPage from "../UserPage/UserPage";
import Header from "../Header/Header";

import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    // alignItems="center"
        >


        <Header/>
      {/*<Route exact path="/login" component={WaveButton}/>*/}
      {/*<Route path="/user/:user" component={withRouter(UserPage)} />*/}
        <UserPage/>

    </Grid>
  );
}

export default App;
