import React from 'react';
import Welcome from './components/common/Welcome'
import './App.css'

function App() {
  return (
    <>
    <h1>Hello React Class!</h1>
    <Welcome name="Omar" />
    <Welcome name="Dennis" />
    <Welcome name="Jan" />
    <Welcome name="Tariq" />
    <Welcome name="Andres" />
    <Welcome name="Pat" />
    </>
  );
}

export default App;
