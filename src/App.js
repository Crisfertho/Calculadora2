
import './css/App.css';
import Componentes from "./componentes/prueba";
import React from 'react';
import {store} from './redux/store'
import {Provider} from 'react-redux'

function App() {
  
  return (
    
    <React.Fragment>  
      <p className='titulo'> Cristhofer Rivera Gómez</p>
      <Provider store={store}>
      <Componentes/>  
      </Provider>
    </React.Fragment>
  );
}

export default App;
