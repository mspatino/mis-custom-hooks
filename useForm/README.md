# useFrom
Ejemplo:
```
    const [formValues, handleInputChange, reset] = useForm({
         name : '',
         email:'',
         password:''
     });

     const {name , email , password} = formValues;
```