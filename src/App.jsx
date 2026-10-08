import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Header} from './header/header'
import {Flower} from './flower/flower'


  export function App() {
    const arrFlowers = [
      {codeFlower: "1", nameFlower:"טוליפ" ,petalColor:"pink" ,centerColor:"red"},
      {codeFlower: "2", nameFlower:"ורד" ,petalColor:"blue" ,centerColor:"yellow"},
      {codeFlower: "3", nameFlower:"טוליפ" ,petalColor:"white" ,centerColor:"green"}
   ]
  
  return (
    <div>
      <Header />
         {arrFlowers.map((flower)=>(<Flower
          key={flower.codeFlower} 
          nameFlower={flower.nameFlower} 
          petalColor={flower.petalColor}
           centerColor={flower.centerColor}/>))
        }
    </div>
   // <div>
     // <Header />
     // <Flower nameFlower="טוליפ" petalColor="pink" centerColor="red"/>
     // <Flower nameFlower="ורד" petalColor="blue"/>
     // <Flower nameFlower="טוליפ" centerColor="blue"/>
      //<Flower nameFlower="טוליפ"/>
    //</div>
    //
  )
}


export default App
