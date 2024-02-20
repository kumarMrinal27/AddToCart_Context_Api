import React,{ useState } from 'react'
import { useContext } from 'react'
import { Counter } from './components/Modify'
import './App.css'
import { CounterContext } from './context/Counter'


function App() {
 const counterState = useContext(CounterContext);
 console.log(counterState);

  return (
    
       <div className='App'>
       <h1>count is {counterState.count}</h1>
       <Counter />
       <Counter />
       <Counter />
       <Counter />
       </div>
   
  )
}

export default App
