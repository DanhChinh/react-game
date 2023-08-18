import { memo, useState, useContext } from "react";
import { GameStateContext } from "./GameStateContext";
import { RS_Rd } from "./randomChoice";
import {calculatePercent, calculatePredict} from "./calculateThePossibility";


function InpurForm() {


    function handleClick(e){
        let newResult = e.target.value;
        console.clear()
        e.preventDefault()
        setDisabled(true);
        setTimeout(() => setDisabled(false), 1000)

        setCounter(counter+1)
        setResult(newResult)
        console.error(predict)
        predict ? 
        setHistory([...history, {result: newResult,isWin: predict == newResult }])
        : 
        setHistory([...history, {result: newResult,isWin:null}])
        let newUserList = [...userList];
        newUserList =  newUserList.map(user=>{
            return user.prd==null?
            {...user, hs:[...user.hs,null],  prd:RS_Rd()}
            :
            {...user, hs:[...user.hs, user.prd == newResult],prd:RS_Rd()}
        })
        //setUserList(newUserList)
        let red = 0;
        let white = 0;
        newUserList.forEach(user=>{
            let prd= calculatePredict(user);

            if(prd){user.isPlay = true
                console.log(user.id, user.prd, prd)
            }else{user.isPlay = false}

            if(prd == "red"){
                red+=1;
                return;
            }
            if(prd == "white"){
                white+=1;
            }
        })

        setUserList(newUserList)
        if(red == white){
            money.current = 0;
            setPredict(null)
        }
        else if(red>white){
            money.current = red-white
            setPredict("red")}
        else{
            money.current = red-white
            setPredict("white")}

    }
        

    console.log("ClickForm")
    const [disabled, setDisabled] = useState(false);
    const {result, setResult, predict, setPredict, history, setHistory, userList, setUserList,counter, setCounter, money} = useContext(GameStateContext)

    return (
        <>
            <br />
            <div className="input-form">

                <button onClick={handleClick} value="red" disabled={disabled} >red</button>
                <button onClick={handleClick} value="white" disabled={disabled} >white</button>
            </div>
        </>
    )
}
export default memo(InpurForm);