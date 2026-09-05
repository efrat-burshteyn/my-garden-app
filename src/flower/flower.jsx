export const Flower=({nameFlower, petalColor, centerColor})=>{
    const petalColorFinal= petalColor ||"red"
    const centerColorFinal=centerColor || "orange"
    
    const message=()=>{
        alert(`אני פרח מסוג ${nameFlower}`)
    }

    return(
         <div onClick={message} style={{backgroundColor: petalColorFinal}}>
            <h2 style={{color: centerColorFinal}}>{nameFlower}</h2>
            <p style={{color: centerColorFinal}}>{petalColor},{centerColor}</p>
        </div>)
  
}