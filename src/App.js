import React, { useEffect } from 'react'
import "./App.css";
import { Container } from './Components/Container';

function App() {

  useEffect(() => {
      document.title = 'my CV'
  }, [])

  const updataData = document.lastModified
  
  return (
    <div className='app'>
      <Container />
      <h4 className='text-center bg-white container ' > last updata : { updataData } </h4>
    </div>
  )
}

export default App
