import { useState } from 'react';

export const useCounter = ( initialState = 10) => {

    const [state, setState] = useState(initialState);

  /*  const increment = ( factor = 1) => {
        setState ( state + factor );
    }

    const decrement = ( factor = 1) => {
        setState ( state - factor );
    }*/
    const increment = () => {
        setState ( state + 1 );
    }

    const decrement = ( ) => {
        setState ( state - 1 );
    }

    const reset = () => {

        setState ( initialState );
    }
    // en el return puedo regresar un objeto o un arreglo dependiendo de lo que es mas conveniente
    //en este caso retorno un objeto {} / arreglo []
    return {
        counter: state,
        increment,
        decrement,
        reset
    }

}
