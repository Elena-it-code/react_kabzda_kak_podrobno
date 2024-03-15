import React, {useMemo, useState} from "react";


export default {
    title: 'useMemo',
}


export const DifficultCountExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake< 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return resultA // наш hook useMemo обязательно должен что-то return(уть). То что и запомнится React с помощью hook useMemo
    }, [a]); // если зависимости deeps:[] оставить пустыми, то это значит, что useMemo запомнится один раз и всегда будет возвращаться одно и тоже значение
    // [a] если a не поменялось, то не надо запускать ()=>{}, этот всеь вычислительный сложный процесс, поскольку результат будет тот же, ведь a не изменилась

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

        return <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
}


// export const DifficultCountHelpsForReactMemo = () => {
    const UsersSecret = (props: {users: Array<string>}) => {
        console.log('USERS SECRET')
        return <div>{
            props.users.map((u,i)=> <div key={i}>{u}</div>)
        }</div>
    }
    const Users = React.memo(UsersSecret)               // Обернули нашу компоненту Users в оболочку функцию UsersSecret. Теперь  контейнерная компонента, которая вылезла из React.memo не будет перезапускать функцию UsersSecret(), если props не изменились

    export const HelpsToReactMemo = () => {
        console.log("HelpsToReactMemo")
        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

        const newArray = useMemo(()=>{
            const newArray = users.filter(u=>u.toLowerCase().indexOf("a") > -1) /*{/!*проопускаем только тех user у которых есть в имени буква a *!/}*/
            return newArray
        }, [users]) // если изменятся список users массив, то запустится функция callback ()=>{} useMemo

        const addUser = () => {
            const newUsers = [...users, 'Sveta ' + new Date().getTime()]
            setUsers(newUsers);
        }

        return <>
            <button onClick={()=> {setCounter(counter+1)}}>+</button>
            <button onClick={()=> {addUser()}}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    }