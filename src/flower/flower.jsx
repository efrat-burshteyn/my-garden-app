export const Flower=({nameFlower, petalColor, centerColor})=>{
    const message=()=>{
        alert(`אני פרח מסוג ${nameFlower}`)
    }

    return(
         <div onClick={message} style={{backgroundColor: petalColor}}>
            <h2 style={{color: centerColor}}>{nameFlower}</h2>
            <p style={{color: centerColor}}>{petalColor},{centerColor}</p>
        </div>)
  
}