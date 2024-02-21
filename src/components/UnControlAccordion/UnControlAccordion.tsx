import {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

type ActionType = {
    type: string     // обязательно есть это свойство. надпись, что именно нужно сделать н/р: "REMOVE-TASK", "ADD-TASK" и т.д.
}
const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"     // использование CONSTANt не даст нам ошибиться при написании свойств, опечататься случайно. Далее используем уже эти const

const reduсer = (state: boolean, action: ActionType) => {
    // самая топовая запись именно так:
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            //return state                                   // action который Reduсer не ждет нет смысла dispath(тить)
            throw new Error("Bad action type")      // как один из вариантов мы можем сгенерировать новую ошибку в default:
     // if (action.type === TOGGLE_CONSTANT) {               // если к нам пришел объект action и у него в этой инструкции сидит тип "TOGGLE-COLLAPSED", т.е. "совпало ключ и замок"
     //   return !state                                    // то мы тогда вернем противоподложное значение стэйта !state
    }

    return state                                    // если к нам пришла инструкция, а мы не нашли совпадение по ключу type н/р: "REMOVE-TASK", "ADD-TASK" и т.д., то мы вернем тот state, который к нам пришел без изменения
}


export function UnControlAccordion (props: AccordionPropsType) {

    /*let collapsed = true*/

    //let[collapsed, setCollapsed]=useState(true)
    let[collapsed, dispath]=useReducer(reduсer, false)        // говорим на тебе reduser пользуйся им, и начальное значение. т.к. у нас state boolean значение, то поэтому говорим, что false

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}

            {/*при нажатии на кнопку AccordionTitle title мы dispath(им) инструкцию type: "TOGGLE-COLLAPSED" в React,
            dispath() - это f, которая вылезла из useReducer(а), с помощбю которой React позволяет нам отправлять в него вот эти вот команды action(экшины),
            чтобы можно было преобразовать state. Стартовое значение котрого передается тут: useReducer(reduсer, стартовое значение: false)
            с помощью этого reduсer(а) по этим правилам (action.type === "TOGGLE-COLLAPSED")
            */}
            <AccordionTitle title={props.titleValue} onClick={()=>{dispath({type: TOGGLE_CONSTANT })}}/>       {/*мы должны в dispath отправить action. action - это объект.сщздаем объект{},  у этого объекта ОБЯЗАТЕЛЬНО должен быть type. Инструкция что нужно сделать "БОЛЬШИШИМИ-БУКВАМИ" */}
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