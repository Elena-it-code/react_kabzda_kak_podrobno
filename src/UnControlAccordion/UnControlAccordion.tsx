import {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}


export function UnControlAccordion(props: AccordionPropsType) {

    /*let collapsed = true*/

    let[collapsed, setCollapsed]=useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            { !collapsed && <AccordionBody/>}
        </div>
    )
}
/*on ? 'green' : 'red'*/

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void // указали в типизации onClick, как свойство, чтобы указать в title, поскольку в компонентах нет такого события onClick. Это событие есть в элементах.
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>---{props.title}---</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}