import logo from './logo.svg'
import './App.css'
//import React, { useEffect } from 'react';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // API 요청
    fetch('/api')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error))
  }, []) // 빈 배열은 한 번만 실행되도록 함

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
