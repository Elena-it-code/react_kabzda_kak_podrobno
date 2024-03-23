import React, {useCallback, useMemo, useState} from "react";


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
        // у нас есть массив user(ов), который мы заMemo(изировали). useMemo запоминает отфильтрованный вариант и каждый раз
        // возвращает один и тот же закэшированный в памяти своей массив, если не было изменений
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



export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])


    // КАК РАБОТАЕТ hook useMemo( ()=>{}, [] ):
    // 1.  Говорим, вызови этот callback ()=>{},
    // 2.  Он тебе что-то вернет/return
    // 3.  То что вернет/return запомни, до тех пор пока не изменится зависимсоть [].
    // 4.  Если изменится зависимость [], то снова => 1. вызови callback ()=>{} 2)...3)... и запомни пока не изменится
    // зависимсоть  []
    // ... и т.д.

    // в первый раз рисуем ее, передаем эту функцию addBook
    // и говорим запомни её, до тех пор пока у тебя не изменится объект книги
    // ВАЖНЫЙ МОМЕНТ!!! ОБЯЗАТЕЛЬНО ей в зависимости передать, то от чего она зависит deeps: [books]
    // Иначе f()-я закэшированная будет работать со старыми данными извне, из внешней области LEXICAL ENV
    const memoizedAddBook = useMemo(()=>{ // в useMemo мы ОБЯЗАТЕЛЬНО передаем callback, который возвращает нам, то что мы хотим запомнить
        return ()=> {
                console.log(books)
                const newBooks = [...books, 'Angular' + new Date().getTime()]
                setBooks(newBooks);
        }
    }, [books]);


    // КАК РАБОТАЕТ hook useCallback ( ()=>{}, [] )
    // hook `useCallback` в React используется для мемоизации (кэширования) колбэк-функций и предотвращает
    // их пересоздание при каждом рендере компонента. Давайте разберем, как это работает в приведенном коде:
    //
    // 1. Сначала мы определяем колбэк-функцию, которую мы хотим мемоизировать. В данном случае это анонимная функция,
    // возвращающая массив `newBooks`, содержащий текущие книги (`books`) и новую книгу, с названием "Angular"
    // и уникальным временным штампом.
    //
    // 2. Мы вызываем функцию `useCallback` и передаем туда эту колбэк-функцию, которую мы хотим мемоизировать,
    // а также массив зависимостей (в данном случае `[books]`). Этот массив указывает, когда нужно пересоздать
    // мемоизированную версию функции.
    //
    // 3. Внутри `useCallback` происходит мемоизация функции, и если значения зависимостей не изменились с момента
    // предыдущего рендера, то будет возвращена кэшированная версия функции. При изменении значений зависимостей,
    // функция будет пересоздана.
    //
    // 4. В конце эта мемоизированная функция `memoizedAddBook2` может быть использована внутри нашего компонента,
    // и при изменении только независимых от нее переменных, функция не будет заново создаваться.
    //
    // Таким образом, использование `useCallback` позволяет избежать ненужных пересозданий функций и повысить
    // производительность компонентов, особенно там, где критична оптимизация повторных рендеров.
    //
    // в useCallback() мы НЕ ГОВОРИМ ВЫЗОВИ f()-ю,
    // как в useMemo(), а ГОВОРИМ ЗАПОМНИ f()-ю, пока не изменится зависимость []
    const memoizedAddBook2 = useCallback(()=>{
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks);
    }, [books]);


    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button> {/*каждый раз при увеличении счетчика, наша компонента бы перерисовывалась*/}
        {counter}
        <Book addBook={memoizedAddBook}/> {/*засовываем эту закэшированную версию в <Book /> */}
    </>
}

const BooksSecret = (props: {addBook: ()=> void}) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => {props.addBook()}}>add book</button>
          </div>
}
const Book = React.memo(BooksSecret)
//В этом примере происходит использование React-компонента `React.memo` для оптимизации производительности.
// Разберем, как это работает:
//
// 1. Создана функциональная компонента `BooksSecret`, которая принимает `props` в виде массива книг `books`.
// Внутри компоненты происходит вывод в консоль сообщения "BooksSecret".
// 2. Внутри компоненты используется метод JavaScript `.map`, чтобы создать массив `div` с книгами из `props`,
// каждому элементу массива назначается уникальный ключ `key={i}`.
//
// Затем компонента `React.memo` используется для повышения производительности. `React.memo` - это функция высшего
// порядка, которая используется для оптимизации рендеринга компонентов.
//
// `React.memo` кэширует результат последнего рендеринга компоненты и использует его при следующем рендеринге.
// Если новые пропсы равны предыдущим, компонента не будет рендериться заново, а будет использовать кэшированный результат.
//
// Таким образом, при использовании `React.memo(BooksSecret)`, компонента `BooksSecret` будет рендериться только при
// изменении пропсов, что улучшает производительность, особенно для больших списков или сложных компонентов.