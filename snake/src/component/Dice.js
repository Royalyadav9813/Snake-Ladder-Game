import { useState,useEffect } from "react"
export default function Dice({randomNum1,randomNum2,value,value2}) {
    const [imageDice1, setImageDice1] = useState(require(`../img/${value}.jpg`));
    useEffect(() => {
      setImageDice1(require(`../img/${value}.jpg`))
    }, [value])
    const [imageDice2, setImageDice2] =  useState(require(`../img/${value2}.jpg`));
    useEffect(() => {
      setImageDice2(require(`../img/${value2}.jpg`))
    }, [value2])
    
  return (
    <>
      <div className="dice-container1" >
        <div className="dice1">
          <img src={imageDice1} alt="jjjd"/>
        </div>
          <button id="mybutton1" onClick={randomNum1}>Player 1</button>
     </div>

      <div className="dice-container2" >
        <div className="dice2">
          <img src={imageDice2} alt="jjjd"/>
        </div>
          <button id="mybutton2" onClick={randomNum2}>Player 2</button>
     </div>
    </>
   

   
    
      
   
  )
}
