import React,{useState} from 'react';

const Hookschallange = () =>{
let curtime = new Date ().toLocaleTimeString();
const state = useState();
const [time, nowtime]=useState(curtime);
const update = () =>{
    curtime = new Date ().toLocaleTimeString();
    nowtime(curtime);
}
return (
    <>
    <h1>{time}</h1>
    <button onClick={update}>GET TIME</button>
    </> 
);
};
export default Hookschallange;
