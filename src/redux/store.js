//import { configureStore } from "@reduxjs/toolkit";
import {reducers} from "./calcuSlice";
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

let store = createStore(reducers, composeWithDevTools())

export {store}
