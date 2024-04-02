import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect & LocalStorage demo',
}

export const SimpleExampleCounter = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, []);

    // deeps:[] - массив зависимостей оставим пустой, потому что он должен у нас отработать единажды.
    // Т.е. я хочу получить данные из localStorage в тот момент, когда мое приложение загрузится.
    // Всё, больше я сюда попадать не хочу

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value]);

    // при каждом изменении зависимости deps:[value], useEffect будет запускать нашу функцию.
    // Т.е. записывать знчаение в localStorage


    const incHandler = () => {
        setValue(value + 1)
    }

    return <>
        <div>
            <h1>{value}</h1>
        </div>
        <button onClick={incHandler}>Inc</button>
    </>
}
