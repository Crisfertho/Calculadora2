import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {resultado, botones, limpiar, borrar} from "../redux/slice/operaciones";
import {CALCULADOR_KEY} from "../hooks/useCalcu";

const Calculadora = () => {
    const dispatch = useDispatch()


     
    const Respuesta = (e) =>{
        e.preventDefault()
        // alert(number)
      dispatch(resultado())
    }
    
    const viewCalculator = useSelector((state) =>{
        return state[CALCULADOR_KEY]
    })

    return (
        
        <React.Fragment>


      <div className='contenedor'>
      
      <div><input type="text" placeholder="0" id="pantalla" value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}/></div>
      <input className="button" type="button" value="7" onClick={() => dispatch(botones(7))}/>
      <input className="button" type="button" value="8" onClick={() => dispatch(botones(8))}/>
      <input className="button" type="button" value="9" onClick={() => dispatch(botones(9))}/>
      <input className="button resaltar" type="button" value="+" onClick={() => dispatch(botones('+'))}/>
      <input className="button" type="button" value="4" onClick={() => dispatch(botones(4))}/>
      <input className="button" type="button" value="5" onClick={() => dispatch(botones(5))}/>
      <input className="button" type="button" value="6" onClick={() => dispatch(botones(6))}/>
      <input className="button resaltar" type="button" value="-" onClick={() => dispatch(botones('-'))}/>
      <input className="button" type="button" value="1" onClick={() => dispatch(botones(1))}/>
      <input className="button" type="button" value="2" onClick={() => dispatch(botones(2))}/>
      <input className="button" type="button" value="3" onClick={() => dispatch(botones(3))}/>
      <input className="button resaltar" type="button" value="*" onClick={() => dispatch(botones('*'))}/>
      <input className="button" type="button" value="0" onClick={() => dispatch(botones(0))}/>
      <input className="button" type="button" value="." onClick={() => dispatch(botones('.'))}/>
      <input className="button" type="button" value="C" onClick={() => dispatch(borrar())}/>
      <input className="button resaltar" type="button" value="/" onClick={() => dispatch(botones('/'))}/>
      <input type="button" value="CA" className="button clear" onClick={() => dispatch(limpiar())}/>
      <input type="button" value="=" className="button igual" onClick={Respuesta}/>
    </div>
            
        </React.Fragment>
    )
}

export default Calculadora