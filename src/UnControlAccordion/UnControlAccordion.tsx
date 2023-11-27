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
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            { !collapsed && <AccordionBody/>}
        </div>
    )
}
/*on ? 'green' : 'red'*/

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>---{props.title}---</h3>
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