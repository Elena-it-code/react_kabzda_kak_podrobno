import React, {useEffect, useState} from "react";

export type ClockPropsType = {}


const get2digitalString = (number: number) => number < 10 ? "0" + number : number

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log("TICK")
            setDate(new Date());
        }, 1000);

        return ()=> { // как только наша компонента будет демонтирована/didMount , наши часы остановятся
            clearInterval(intervalId)
        }

    }, []);

    // из-за этой пустой зависимости мы запуститм всего лишь один раз useEffect()
    // но при запуске он вернул эту ыункцию по зачистке. И React будет ждать, когда компонента будет умирать.
    // Чтобы перед ее удалением вызвать эту функцию по зачистке, и зачистить всеь мусор како-то там есть (сайд эффекты)

    return (
        <div>
            <span>{get2digitalString(date.getHours())}</span>
            :
            <span>{get2digitalString(date.getMinutes())}</span>
            :
            <span>{get2digitalString(date.getSeconds())}</span>
        </div>
    )

};




// Можно не передать в разметку, тем самым избавиться от этих переменных и лишнего кода
// const secondString = get2digitalString(date.getSeconds())
// const minutesString = get2digitalString(date.getMinutes())
// const hoursString = get2digitalString(date.getHours())
//  return (
//         <div>
//             <span>{hoursString}</span>
//             :
//             <span>{minutesString}</span>
//             :
//             <span>{secondString}</span>
//         </div>
//     )

// Зарефакторили, избавились от дублирования кода
// const secondString = date.getSeconds() < 10
//     ? "0" + date.getSeconds()
//     : date.getSeconds()
//
// const minutesString = date.getMinutes() < 10
//     ? "0" + date.getMinutes()
//     : date.getMinutes()
//
// const hoursString = date.getHours() < 10
//     ? "0" + date.getHours()
//     : date.getHours()