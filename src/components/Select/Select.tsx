import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoverElementValue)

    useEffect(() => {                      // useEffect( ()=>{}, [] ) гооврит о том, что я буду запускать эту callback функцию ()=>{} , если изменилось что-то внутриэтих зависимостей []. Если что-то изменилось внутри этих зависимсотях [], то я тогда эту callback f запущу ()=>{}
        setHoveredElementValue(props.value);        // set ты всегда должен соответсвовать тому значению которое пришло к нам в props(ах)
    }, [props.value])                        // зафиксировал один раз, если value изменилось снаружи


    const toggleItems = () => {
        setActive(!active)
    }        // при клике по span покажи нам наш список Items(ов), меняем значение setActive на противоположное значение active, чтобы при клике он скрывал и показывал автоматомически при клике по span

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()        // вызываем эту функци, чтобы при выборе нужного элемента из списка , скрыть его. Т.е. чтобы стейт поменял значение active на false и скрыл его !active
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {                            // это пробегание делай если только нажаты "ArrowDown" или "ArrowUp"
            //пробегаемся по всем item методом for(), посокльку его легко прервать , чем forEach().
            for (let i = 0; i < props.items.length; i++) {                    // пробежимся по всем let i=0 , от нуля. И длина меньше всех item -- i < props.items.length --
                if (props.items[i].value === hoverElementValue) {                     // и если текущий item  -- props.items[i]-- , его .value равно тому value, который у нас является hover(нутым)/hoverElementValue  -- .value === hoverElementValue --
                    const pretendentElement = e.key === "ArrowDown"         // если у нас следующий элемент === "ArrowDown",
                        ? props.items[i + 1]                                          // то тогда у нас будет -- props.items[i+1]
                        : props.items[i - 1]                                          // а иначе берем предыдущий элемент -- props.items[i-1]

                    if (pretendentElement) {                                         // Дальше мы работмаем уже с -- pretendentElement -- Если он у нас нашелся этот элемент вообще
                        props.onChange(pretendentElement.value)                      // то, тогда мы мы значение .value этого pretendentElement отправляем наружу вверх в props.onChange(сюда)
                        return                                                       // лучше вместо break сделать return из f() onKeyUp. Означает, что вообще прервалось. Что если вдруг прерывания у нас не произошло -- return -- не сработал, значит у нас ничего не нашлось,
                    }
                }
            }
            if (!selectedItem) {                                                    // если мы прошли цикл и не вышли, дальше проверяем. Если у нас !selectedItem нет вообще, то тогда говорим selectedItem будь первым
                props.onChange(props.items[0].value)                                // то тогда pretendentElement должен являться первый элемент. И мы говорим, что мы отправляем в качестве выбранного элемента первый элемент в списке props.items[0].value
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {                              // если нажаты клавиши "Enter" или "Escape", произошли эти события,
            setActive(false)                                                  // то нам нужно спрятать текущее значение
        }
    }


    return (
        <div>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main}
                      onClick={toggleItems}>{selectedItem && selectedItem.title}</span> {/*если этот элемент существует, то отобразим его используем знак &&*/}

                {/*--- если активно   active &&  ,  то дивку эту покажем ---*/}
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }} // когда мышка над элементом. Мы запускаем setState и говорим, что в этот момент нам надо i.value, т.е. конктерно value этого i элемента записать в useState(сюда)
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")} // говорим прибавь к этому классу styles.item строку  " " и прибавь selected, если это нужно. А для этого мы проверяем.  Конкретный item по которому мы пробегаемся является выбранным? Выше мы уже сделали поиск selectedItem. Говорим selectedItem === тому I (item) по которому мы пробегаемся? То тогда ? добавляем класс  styles.selected в противном случае : ничего не добавляем " ". При наведении заменили styles.item на hoveredItem
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }} // передаем (i.value), это value перейдет в f() onItemClick и там уже сделает двойную команду --- props.onChange(value) и  toggleItems() ---
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
            {/*при помощи стилей скрываем наш список как еще один вариант показывать и скрывать список наших items(ов)
            div className={styles.select + " " + (active ?  styles.active : " ")}>
                <h3>{selectedItem && selectedItem.title}</h3> если этот элемент существует, то отобразим его используем знак &&
                <div className={styles.items}>
                    {props.items.map(i => <div>{i.title}</div>)}
                </div>
            </div>*/}
        </div>
    )
}


















































































