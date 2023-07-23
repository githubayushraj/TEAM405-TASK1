import React,{useState} from 'react';

const Hooks = () => {
const state = useState();

const [count,upgrade] = useState(0);

const incNum = () => {
    upgrade(count + 1);
};

return(
    <>
    <h1>{count}</h1>
    <button onClick={incNum}>click me</button>
    </>
);
};
export default Hooks;

