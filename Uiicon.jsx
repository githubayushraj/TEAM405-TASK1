import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Uiicon =() => {
const state = useState();
const [count, upgrade]=useState(0);
// const increment=() => {
//     upgrade(count+1);
// }
const decrement = ()=> {
    upgrade(count-1);
}
return(
    <>
    <h1>{count}</h1>
    {/* <button onClick={increment}><AddIcon/></button> */}
    <button onClick={decrement}><DeleteForeverIcon/></button>
    </>
);
};
export default Uiicon;