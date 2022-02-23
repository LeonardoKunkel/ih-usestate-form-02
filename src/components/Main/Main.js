// Qué es un Hook?
// Es una función que se encuentra nativa en react la cual puede ayudarnos a resolver un problema de datos específico.
import { useState } from "react";
import { nanoid } from "nanoid";

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

    const [id, setId] = useState('')

    const [editionMode, setEditionMode] = useState(false)

    const handleChange = (event) => {
        console.log(event.target.value);
        console.log('Hola');
        console.log('El campo de texto en el que estás escribiendo es: ',event.target.name);

        setNewComment({
            ...newComment,
            id: nanoid(),
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

    const deleteComment = (id) => {
        console.log(id);

        // Encontrar el elementto dentro del listado y sacarlo de ahí
        //
        // list => [*,*,A,*,*]
        // devolvamos la nueva lista [*,*,*,*]

        const filteredComments = list.filter((item) => {
            return item.id !== id
        })

        setList(filteredComments)
    }

    const editComment = (element) => {
        setEditionMode(true)
        setNewComment({
            id: element.id,
            subject: element.subject,
            content: element.content,
            author: element.author
        })

        setId(element.id)
    }

    const handleSubmitEdit = (event) => {
        // Evitar la recarga de página
        event.preventDefault()

        // Validación de campos vacíos

        // Encontrar el elemento de la lista
        // Modificar el elemento de la lista
        // Editar el elemento dentro de la lista
        const filteredArray = list.map((item) => {
            return item.id === id ? {
                id: id,
                subject: newComment.subject,
                content: newComment.content,
                author: newComment.author
            } : item

        })

        console.log(filteredArray);

        setList(filteredArray)

        setEditionMode(false)

        setNewComment({
            subject: '',
            content: '',
            author: ''
        })
    }

    return (
        <>
        <h1>Seccion de comentarios</h1>

        <div className={editionMode ? 'max-w-5xl mx-auto px-6 pb-6 bg-yellow-100' : ''}>


            <form onSubmit={
                editionMode ?
                (event) => { handleSubmitEdit(event) }
                :
                (event) => { handleSubmit(event) }
            }>

                <label>Asunto</label>
                <input name="subject"
                    value={newComment.subject}
                    className={'border shadow-sm mt-2 rounded-md border-gray-200 block w-full focus: border-blue'}
                    onChange={(event) => { handleChange(event) }}
                />

                <label>Comentario</label>
                <input name="content"
                    value={newComment.content}
                    className={'border shadow-sm mt-2 rounded-md border-gray-200 block w-full focus: border-blue'}
                    onChange={(event) => { handleChange(event) }}
                />

                <label>Autor</label>
                <input name="author"
                    value={newComment.author}
                    className={'border shadow-sm mt-2 rounded-md border-gray-200 block w-full focus: border-blue'}
                    onChange={(event) => { handleChange(event) }}
                />

                {
                    editionMode ?
                    <button type="submit">Editar comentario</button>
                    :
                    <button type="submit">Crear comentario</button>
                }

                <p>{ error }</p>

            </form>

        </div>

        <h2>Listado de comentarios</h2>

        {
            list.length === 0 ? <p>No hay publicaciones</p>
            :
            list.map((elt, index) => {
                return(
                    <div className="mb-4 bg-blue-600 text-white" key={index}>

                        <h3>{elt.subject}</h3>
                        <span>Escrito por: {elt.author}</span>
                        <p>{elt.content}</p>

                        <button onClick={() => editComment(elt)}>
                            Editar
                        </button>
                        <button onClick={() => { deleteComment(elt.id) }}>
                            Borrar
                        </button>
                    </div>
                )
            })
        }

      </>
  )
}
