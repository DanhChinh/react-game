import {createContext, useRef, useState } from "react"
import {data} from "./data.js" ;

const GameStateContext = createContext()

function GameStateProvider({children}){
    const [result, setResult] = useState(undefined);
    const [predict, setPredict] = useState(undefined);
    const [history, setHistory] = useState([]);
    const [userList, setUserList] = useState(data);
    const [counter, setCounter] = useState(0);
    const money = useRef(0)

    return (
        <GameStateContext.Provider value={{result, setResult, predict, setPredict, history, setHistory, userList, setUserList,counter, setCounter, money}}>
            {children}
        </GameStateContext.Provider>
    )
}

export  {GameStateProvider, GameStateContext};