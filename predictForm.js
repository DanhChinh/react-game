import { memo, useContext } from "react"
import { GameStateContext } from "./GameStateContext"

function PredictForm(){
    console.log("render:PredictForm")
    const {predict, money, ...other} = useContext(GameStateContext)
    
    return (
        <div className="predict-form" >
            <p>{predict} : {money.current!=0 && money.current}</p>
        </div>
    )
}

export default memo(PredictForm)