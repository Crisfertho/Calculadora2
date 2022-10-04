import {RESULTADO, BOTONES, LIMPIAR, BORRAR} from '../redux/slice/acciones';

export const CALCULADOR_KEY = 'calculatorStore'

let initialState ={
    number:'',
    ans:'',
  
}
   
export const calculadorReducer = (state = initialState, action) =>{
    let {type, payload} = action
    
     switch(type){
        case BOTONES:
            return{
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
           
                
            }

            case RESULTADO:
                 try{
                   return {
                    ...state,
                    ...payload,
                    ans:eval(state.number).toString()
                   }

                }catch(err){
                    return {
                        ...state,
                        ...payload,
                        ans:'Error'
                    }
                }
            //    return{
            //        ...state,
            //        ...payload,
            //        ans:eval(state.number).toString()
            //    }

               case LIMPIAR:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }

                case BORRAR:
                    return{
                        ...state,
                        ...payload,
                        number:(state.number).slice(0,-1),
                        ans:''
                    }

                default: return state
    }


}