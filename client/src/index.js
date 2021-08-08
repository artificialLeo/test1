import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
    <BrowserRouter>
        <CssBaseline/>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);