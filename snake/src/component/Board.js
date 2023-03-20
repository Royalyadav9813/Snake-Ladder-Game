import React, { useState } from "react";
import Dice from "./Dice";
import SmallBox from "./SmallBox/SmallBox";
import { useEffect } from "react";
import ladderMap from "./Laddermap";
import snakeMap from "./Snakemap";

export default function Board() {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);
  const [prev, setPrev] = useState(1);
  const [prev2, setPrev2] = useState(1);
  const [ladderList, setLadderList] = useState([]);
  useEffect(()=>{
    let list=[];
    let odd=0;
    let even=0;
    let i=100;
    while(i!==0){
      list.push(i);
      odd++;
      if(odd===10){
        i=i-10;
        while(even!==10){
          list.push(i);
          i++;
          even++;
        }
        i=i-10;
        odd=0;
        even=0;
      }
      i--;
    }
    setLadderList(list)
  },[])
  // ********For Dice 1************
  const randomNumber1 = () => {
    let ran = Math.floor(Math.random() * 6 + 1);
    if (ran + value <= 100) {
      setValue(ran + value);
      setPrev(ran);
    }
  };
  //  ********For Dice 2************
  const randomNumber2 = () => {
    let ran1 = Math.floor(Math.random() * 6 + 1);
    if (ran1 + value2 <= 100) {
      setValue2(ran1 + value2);
      setPrev2(ran1);
    }
  };
  // **********For Player 1**************
  useEffect(() => {
    console.log("UseEffect of player 1 called");
    if (value == 100) {
      alert("Hurrah! You won the game");
    }

    for (let key in snakeMap) {
      if (value == key) {
        setValue(snakeMap[key]);
      }
    }

    for (let key in ladderMap) {
      if (value == key) {
        setValue(ladderMap[key]);
      }
    }
  }, [value]);
  // **************For Player2*****************
  useEffect(() => {
    console.log("Useeffect of player 2 called");
    if (value2 == 100) {
      alert("Hurrah! You won the game");
    }

    for (let key2 in snakeMap) {
      if (value2 == key2) {
        setValue2(snakeMap[key2]);
      }
    }

    for (let key2 in ladderMap) {
      if (value2 == key2) {
        setValue2(ladderMap[key2]);
      }
    }
  }, [value2]);
  return (
    <div className="Big-container">
      <Dice randomNum1={randomNumber1} randomNum2={randomNumber2} value={prev} value2={prev2} />

      <div className="header">
        <h1>Snake And Ladder Game</h1>
      </div>

      <div className="container">
        {ladderList.map((i) => {
          return <SmallBox value={i} value2={i} pos={value} pos2={value2} />;
        })}
      </div>
     

    </div>
  );
}
