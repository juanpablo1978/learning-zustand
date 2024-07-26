//importamos el hook
import { useCounterStore } from "./store/CounterStore"
//para poder utilizar valores de un bojeto importamos de zustand" (y la llamamos como segundo parametro)
import { shallow } from "zustand/shallow"
import { useEffect } from "react"

const App = () => {

  //ejecutada asi la funcion, devuelve todo lo que tiene el estado en el cual la guardamos
 // useCounterStore()

 //tambien podemos particularizar lo que queremos traer del store a través de un objeto
 // (guardamos la funcion en una constante) y desestructuramos:
 const {title, count, posts} =  useCounterStore((state)=> ({
    count: state.count,
    title: state.title,
    posts: state.posts,
  }),shallow)

  //funcion que actualiza el estado, guardada en una constante (increment desestructurado)
  const {increment, getPosts, multiply} = useCounterStore()
  getPosts(); //incluyo la funcion getPost en el destructuri y luego la ejecuto

useEffect(()=> {
  getPosts()
}, [])

  return (
    <>
  <div>
    <h1>{title} contador, cuyo valor es: {count}</h1>
  </div>

  <button
  onClick={()=>{
    increment(10)
  }}>
      increment by 10
  </button>

  <button
  onClick={()=> {
    multiply(5)
  }}>
    Multiply by 5
  </button>

  <hr />

  {JSON.stringify(posts)}

  </>
  )
}

export default App
