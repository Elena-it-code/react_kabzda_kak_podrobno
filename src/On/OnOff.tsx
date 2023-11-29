

type PropsType = {
    on: boolean
    onChange: (on: boolean)=> void
}

export function OnOff (props:PropsType) {
   /*let on = false;*/

    const onStyle ={
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: props.on ? 'green': 'white'
    };
    const offStyle={
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const indicatorStyle={
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginBottom: '-15px',
        marginLeft: '20px',
        backgroundColor: props.on ? 'green' : 'red'
    };


    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}