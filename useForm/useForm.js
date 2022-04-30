import { useState } from 'react'

//initialState es igual a un Objeto{} vacio
//similar a { name : '', email:'', password:'' }
export const useForm = ( initialState = {} ) => {

    //values : todos los inputs del form
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name] : target.value
        });
       }

    //regreso un arreglo con los values y el handleInputChange   
    return [values, handleInputChange, reset];


}
