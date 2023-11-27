import {useState} from "react";


type PropsType = {
    //on: boolean
}

export function OnOff (props:PropsType) {
   /*let on = false;*/
   let[on, setOn] = useState(false); // hook
    const onStyle ={
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: on ? 'green': 'white'
    };
    const offStyle={
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle={
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginBottom: '-15px',
        marginLeft: '20px',
        backgroundColor: on ? 'green' : 'red'
    };


    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}