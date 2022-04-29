import React, { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({data:null, loading: true,error: null});

    //solo se ejecuta cuando el componente se carga por primera ves
    useEffect(() => {
      //no quiero q haga nada este efecto por eso el cuerpo esta vacio


        // el return  se ejecuta  cuando el componente se desmonte,
        // y cuando se desmonte cambio el valor del isMounted a false
      return () => {
        isMounted.current = false;
      }
    }, [])
    
    

    useEffect( () => {
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {




                setTimeout(() => {

                    if (isMounted.current){
                        setstate({ loading: false,
                            error: null,
                            data})
                    } else {
                        console.log("setState no se llamo");
                    }


              
                }, 4000);

              
             });

    },[url]);
    
    return state;

}
