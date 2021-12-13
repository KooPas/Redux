import React from "react";
import reactDOM from "react-dom";
import App from "./App";
import {createStore} from 'redux'

const store = createStore()

reactDOM.render(
    <App />,
    document.getElementById('root')
)