import { useContext } from "react";
import { GameStateContext } from "./GameStateContext";

function Counter(){
    const {counter, ...other} = useContext(GameStateContext);
    return (
        <div className="counter">
            #{counter}
        </div>
    )
}
export default Counter;