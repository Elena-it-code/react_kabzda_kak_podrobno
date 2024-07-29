import React, {useEffect, useState} from "react";
import './MyAnalogClock.css'

export type ClockPropsType = {}


export const MyAnalogClock: React.FC<ClockPropsType> = (props) => {

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

    // Вычисляем углы поворота для стрелок
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

    return (
            <div className="clock">
                <div className="hand hour" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
                <div className="hand minute" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
                <div className="hand second" style={{ transform: `rotate(${secondDegree}deg)` }}></div>
                <div className="center"></div>
            </div>
    );
};



// Объяснение кода:
// Расчет углов:
//
// secondDegree вычисляется на основе текущих секунд (каждая секунда — это 6 градусов).
// minuteDegree вычисляется на основе текущих минут и секунд (каждая минута — это 6 градусов, и каждая секунда в минуте добавляет по 0.1 градуса).
// hourDegree вычисляется на основе текущих часов и минут (каждый час — это 30 градусов, и каждая минута в часе добавляет по 0.5 градуса).
//
// Стили:
// Добавлены стили для стрелок часов (.hand, .hour, .minute, .second) и центральной точки (.center).
// Стрелки позиционируются относительно центра часов и поворачиваются с помощью свойства transform.
//
// Рендеринг:
// transform: rotate(${degree}deg) используется для поворота стрелок в зависимости от рассчитанных углов.
// Этот код позволяет вам отображать аналоговые часы с часовой, минутной и секундной стрелками вместе с цифровым отображением времени.