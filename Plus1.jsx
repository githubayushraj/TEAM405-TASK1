import React from 'react';



function Plus1(){
let greeting=" ";
let currtime = new Date();
currtime = currtime.getHours();
let csStyle = {};

if (currtime >=1 && currtime <11){
    greeting = "Good Morning";
    csStyle.color='green';
}
else if (currtime >=11 && currtime <19){
    greeting = "Good Afternoon";
    csStyle.color='RED';
}
else {
    greeting = "Good Night";
    csStyle.color='orange';
}
    return  <h1> !! HELLO WORLD !!<span style={csStyle}> {greeting}  </span>  </h1>;
    
}
export default Plus1;