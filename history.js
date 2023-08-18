import { useContext, useState } from "react";
import { GameStateContext } from "./GameStateContext";

function Round({result, isWin, index, text}){
    const style = (isWin)=>{
        if(isWin===null){return}
        return isWin? "text-green":"text-red"
    }
    // const text = (isWin)=>{
    //     if(isWin===null){return}
    //     return isWin? "V":"X"
    // }
    return(
        <div >
        <div className={result+" round"}>{index}</div>
        <div className={style(isWin) +" square"}>{text}</div>
        </div>
    )
}
function History(){
    const {history, ...other} = useContext(GameStateContext);
    let number = 0;
    let numberList = history.map(hs=>{
        if(hs.isWin==null){return number}
        else if(hs.isWin){number++;return number}
        else{ number --;return number}

    })
    return (
        <div className="history flex">
            {
            history.map((round, index)=><Round key={index} result={round.result} isWin={round.isWin} index={index} text = {numberList[index]} />)
            }
        </div>
    )
}
export default History;