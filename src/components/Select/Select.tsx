import React, {useState} from "react";
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
    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = ()=> {setActive(!active)} // при клике по span покажи нам наш список Items(ов), меняем значение setActive на противоположное значение active, чтобы при клике он скрывал и показывал автоматомически при клике по span

    const onItemClick = (value: any)=> {
        props.onChange(value)
        toggleItems() // вызываем эту функци, чтобы при выборе нужного элемента из списка , скрыть его. Т.е. чтобы стейт поменял значение active на false и скрыл его !active
    }

    return (
        <div>
            <div className={styles.select + " "}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span> {/*если этот элемент существует, то отобразим его используем знак &&*/}

                {/*--- если активно   active &&  ,  то дивку эту покажем ---*/}
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            key={i.value}
                            onClick={ ()=>{onItemClick(i.value)} } // передаем (i.value), это value перейдет в f() onItemClick и там уже сделает двойную команду --- props.onChange(value) и  toggleItems() ---
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


















































































