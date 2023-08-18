import { useCallback, useContext } from "react"
import { GameStateContext } from "./GameStateContext"
import { calculatePercent } from "./calculateThePossibility"
const HistoryComponent = ({hs})=>{
    
    let style = (isWin)=>{
        if(isWin==null){return "square white"};
        return isWin? "square green": "square red"
    }

    return(
        <div className="history-component" >
        {hs.map((isWin,index)=> <div key={index} className={style(isWin)} ></div>)}
        </div>
    )
}

const UserComponent = ({user})=>{
    // console.log("user from UsrComponent: ", user)
    return (
        <div style={user.style} className={user.isPlay? "user boder-green":"user boder-red"} >
            <p>id:{user.id}</p> 
            <p>prd:{user.prd}</p>
            <HistoryComponent hs={user.hs} />
            <p>percent: {Math.floor(calculatePercent(user.hs))+"%"}</p>
        </div>
    )
}
function UserListComponent(){
    console.log("UserList render")
    const {userList, ...other} = useContext(GameStateContext)
    const handleChangeList = useCallback(()=>{
        console.log("callback")
    },[userList])
    return (
        <div className="user-list">
            {
            userList.map((user,index)=> <UserComponent key={index} user={user} />)
            }
        </div>
    )
}
export default UserListComponent;