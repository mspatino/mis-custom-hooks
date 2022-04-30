# useCounter

Ejemplo:

```
export const CounterWithCustomHook = () => {

    const { state , increment , decrement, reset} = useCounter(100);

  return (
    <>
    <h1>Counter with Hook: { state }</h1>
    <br/>
    <button onClick={() => increment(2) } className='btn'>+1</button>
    <button onClick={ reset } className='btn'> Reset </button>
    <button onClick={() => decrement(2) } className='btn'>-1</button>
    </>

  )
}
```