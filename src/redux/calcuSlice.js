
import {combineReducers} from 'redux';
import {calculadorReducer, CALCULADOR_KEY} from "../hooks/useCalcu"



let reducers = combineReducers({
    [CALCULADOR_KEY]:calculadorReducer
})

export {reducers}