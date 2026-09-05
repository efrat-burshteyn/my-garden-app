import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Header} from './header/header'
import {Flower} from './flower/flower'


  export function App() {
  return (
    <div>
      <Header />
      <Flower nameFlower="טוליפ" petalColor="pink" centerColor="red"/>
      
      <Flower nameFlower="טוליפ"/>
    </div>
  )
}


export default App
