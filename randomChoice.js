function RGB_Rd(){
    let rd = ()=>Math.floor(Math.random()*(255-50)+50);
    let rgb= `rgb(${rd()}, ${rd()}, ${rd()})`;
    return rgb;
  }
  
function RS_Rd(){
    return Math.random()>0.5? "red" : "white";
}

export {RGB_Rd, RS_Rd }