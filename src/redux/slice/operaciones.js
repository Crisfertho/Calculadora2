import {RESULTADO, BOTONES, LIMPIAR, BORRAR} from './acciones'


export const botones = (number) =>{
    return{
        type: BOTONES,
        payload:number
    }
}

export const resultado = (number) =>{
    return{
        type:RESULTADO,
        payload:number
    }
}

export const limpiar = (number) =>{
    return{
        type:LIMPIAR,
        payload:number
    }
}

export const borrar = (number) =>{
    return{
        type:BORRAR,
        payload:number
    }
}



