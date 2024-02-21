import {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

export type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UnControlAccordion (props: AccordionPropsType) {

    //let[collapsed, setCollapsed]=useState(true)
    let[state, dispatch]=useReducer(reducer, { collapsed: false})        // говорим на тебе reduser пользуйся им, и начальное значение. т.к. у нас state boolean значение, то поэтому говорим, что false

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}

            {/*при нажатии на кнопку AccordionTitle title мы dispath(им) инструкцию type: "TOGGLE-COLLAPSED" в React,
            dispath() - это f, которая вылезла из useReducer(а), с помощбю которой React позволяет нам отправлять в него вот эти вот команды action(экшины),
            чтобы можно было преобразовать state. Стартовое значение котрого передается тут: useReducer(reduсer, стартовое значение: false)
            с помощью этого reduсer(а) по этим правилам (action.type === "TOGGLE-COLLAPSED")
            */}
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT })}}/>       {/*мы должны в dispath отправить action. action - это объект.сщздаем объект{},  у этого объекта ОБЯЗАТЕЛЬНО должен быть type. Инструкция что нужно сделать "БОЛЬШИШИМИ-БУКВАМИ" */}
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            { !state.collapsed && <AccordionBody/>}
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