import React, {useEffect, useState} from "react";


export default {
    title: 'SessionStorage demo',
}

export const SimpleExampleCounter = () => {
    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToSessionStorageHandler = () => { // записываем значение в SessionStorage
        sessionStorage.setItem('counterValue', JSON.stringify(value))
        setValue(value)
    }


    return <>
        <div>
            <h1>{value}</h1>
        </div>
        <button onClick={incHandler}>Inc</button>
        <button onClick={setToSessionStorageHandler}>setToSessionStorage</button>
    </>
}


// sessionStorage - работает на время сессии. Т.е. на то время пока открыта вкладка браузера
// Как только мы зкароем вкладку, значение в sessionStorage удаляется
// Единтсвенная разница между LocalStorage & SessionStorage  - во времени жизни
// По функционалу(методы) они индентичны
