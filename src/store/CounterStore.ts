//IMPORTAR LA BIBLIOTECA
import  {create}  from 'zustand'

//interface para tipar Post
interface Post{
    id: string,
    tittle: string,
    body: string
}

//creo una interface para tipar datos
interface CounterState{
    count: number,
    title: string,
    posts: Post[],  //como este tipo de dato no existo, lo tengo que crear
    increment: (value: number)=> void,
    getPosts: () => Promise<void>,
    multiply: (value: number) => void,
}


//create ES UNA FUNCION A EXPORTAR PARA PODER UTILIZAR EN LA APP
//actions ----> set como parametro, actualiza el estado
//actions----> get como parametro, para obtener valores
 export const useCounterStore = create<CounterState>((set, get)=>({
    
    //dentro de la funcion, van los datos que queremos compartir como objeto
    count:10,
    title: 'Esto es un',
    posts: [],
    

    //funcion que recibe un valor de tipo number, que devuelve un nuevo valor
    //el nuevo valor es la suma del valor actual + el valor que se le pase
    increment:(value:number)=> set(state => ({
        count: state.count + value
    })),

      //funcion asincrona para posts
      getPosts:async () => {
        const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()
        //para actualizar las publicaciones (con el action set modifico), el state me trae todas las publicaciones
        //dentro de un nuevo objeto ({})
        set(state=> ({
            ...state,
            posts
        }))
     },     
     
     //funcion para multiplicar que recibe un valor de tipo number
     multiply: (value: number) => {
        // const count = get().count
        const { count } = get();
        set({ count: count * value });
      },
}))

