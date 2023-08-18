export function calculatePercent(hs){
    //user.hs [null, true, false]
    let TrueCounter = 0;
    let JoinCounter = 0;

    hs.forEach(element => {
        if(element!==null){
            if(element){
                TrueCounter++;}
            JoinCounter++
        }
    });
    return TrueCounter*100/JoinCounter
}

export function calculatePredict(user){
    let percent =  calculatePercent(user.hs);
    if(percent<40 ){
        return user.prd;
    } else if(percent>60){
        switch(user.prd){
            case "red":{return "white"}
            case "white":{return "red"}
            default :{return null}
        }
    }else{return null}
}