// Qué es un Hook?
// Es una función que se encuentra nativa en react la cual puede ayudarnos a resolver un problema de datos específico.
import { useState } from "react";

export default function Main() {

    //          Invocación de useState con un argumento de estado inicial.
    // const [data, setData] = useState({
    //     nombre: 'Leo'
    // }) // => [***, () => {}]

    // const changeName = () => {
    //     setData({
    //         nombre: 'Leonardo Bravo'
    //     })
    // }

    const [newComment, setNewComment] = useState({
        subject: '',
        content: '',
        author: ''
    })

    const [list, setList] = useState([])

    const [error, setError] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value);
        console.log('Hola');
        console.log('El campo de texto en el que estás escribiendo es: ',event.target.name);

        setNewComment({
            ...newComment,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault() // Detener la recarga de página

        if(!newComment.subject || !newComment.content || !newComment.author) {

            setError('Existe un campo vacío. Por favor verifica nuevamente.')
            return
        }

        setList([
            ...list,
            newComment
        ])

        setNewComment({ // Restablecer el input como vacío
            subject: '',
            content: '',
            author: ''
        })

        setError('')

    }

  return (
      <>
        <h1>Seccion de comentarios</h1>

        <form onSubmit={ (event) => { handleSubmit(event) } }>

            <label>Asunto</label>
            <input name="subject"
                   value={newComment.subject}
                   onChange={(event) => { handleChange(event) }}
            />

            <label>Comentario</label>
            <input name="content"
                   value={newComment.content}
                   onChange={(event) => { handleChange(event) }}
            />

            <label>Autor</label>
            <input name="author"
                   value={newComment.author}
                   onChange={(event) => { handleChange(event) }}
            />

            <button type="submit">Crear comentario</button>

            <p>{ error }</p>

        </form>

        <h2>Listado de comentarios</h2>

        {
            list.length === 0 ? <p>No hay publicaciones</p>
            :
            list.map((elt, index) => {
                return(
                    <div key={index}>
                        <h3>{elt.subject}</h3>
                        <span>Escriot por: {elt.author}</span>
                        <p>{elt.content}</p>
                    </div>
                )
            })
        }

      </>
  )
}
