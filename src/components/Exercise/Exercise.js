import { useState } from "react"
import { nanoid } from "nanoid";

export default function Exercise() {

    // 1. Generar las variables para el formulario
    const [newComment, setNewComment] = useState({
        tema: '',
        contenido: '',
        autor: ''
    })

    // 5. Generar las variables para generar los comentarios y el useState con un array vacio
    const [list, setList] = useState([])

    // 7.1. Generar las variables para los errores
    const [error, setError] = useState('')

    // 8. Generar las variables para conseguir el id
    const [id, setId] = useState('')

    // 10. Generar las variables para editar
    const [editionMode, setEditionMode] = useState(false)

    //3. Generar función para revisar si se guarda la info al momento de teclear
    const publicar = (event) => {
        console.log(event.target.value);

        // 4. Llamar el useState para generar el comentario
        setNewComment({
            ...newComment,
            // 9.2 Generar el id
            id: nanoid(),
            [event.target.name]: event.target.value
        })
    }

    // 7. Generar la función para hacer el submit
    const subir = (event) => {

        event.preventDefault() // Detener la recarga de página

        // 7.2. Agregar las validaciones
        if(!newComment.tema || !newComment.contenido || !newComment.autor) {

            setError('Existe un campo vacío. Por favor verifica nuevamente.')
            return

        }

        setList([
            ...list,
            newComment
        ])

        setNewComment({ // Restablecer el input como vacío
            tema: '',
            contenido: '',
            autor: ''
        })

        setError('')

    }

    // 9. Generar la función de eliminar
    const borrar = (id) => {
        console.log(id)

        const filtrarComentarios = list.filter((item) => {
            return item.id !== id
        })

        setList(filtrarComentarios)
    }

    // 11. Generar la función de editar
    const editar = (element) => {
        setEditionMode(true)
        setNewComment({
            id: element.id,
            tema: element.tema,
            contenido: element.contenido,
            autor: element.autor
        })

        setId(element.id)
    }

    // 12. Generar la función de cambiar de editar
    const cambiarEditar = (event) => {
        event.preventDefault()

        const filtrar = list.map((item) => {
            return item.id === id ? {
                id: id,
                tema: newComment.tema,
                contenido: newComment.contenido,
                autor: newComment.autor
            } : item
        })

        console.log(filtrar);

        setList(filtrar)

        setEditionMode(false)

        setNewComment({
            tema: '',
            contenido: '',
            autor: ''
        })
    }

    return (
        <>
        {/* 2. Generar el formulario */}
        <h1>Sección de comentarios</h1>

        <form onSubmit={
            // 12.1. Cambiar los botones
            editionMode ?
            (event) => { cambiarEditar(event) }
            :
            (event) => { subir(event) }}>

            <label>Tema</label>
            <input name="tema" value={newComment.tema} onChange={(event) => {publicar(event)}} />

            <label>Contenido</label>
            <input name="contenido" value={newComment.contenido} onChange={(event) => {publicar(event)}} />

            <label>Autor</label>
            <input name="autor" value={newComment.autor} onChange={(event) => {publicar(event)}} />

            <button type="submit">Crear comentario</button>

            {/* 7.3. Agregar el error al formulario */}
            <p>{ error }</p>

        </form>

        {/* 6. Generar la lista de comentarios */}
        <h2>Lista de comentarios</h2>

        {
            list.length === 0 ? <p>No hay publicaciones</p>
            :
            list.map((elt, index) => {
                return(
                    <div className="mb-4 bg-lime-500" key={index}>

                        <h3>{elt.tema}</h3>
                        <span>{elt.autor}</span>
                        <p>{elt.contenido}</p>

                        {/* 9.1 Agregar el botón de borrar */}
                        <button onClick={() => borrar(elt.id)}>
                            Borrar
                        </button>

                        {/* 11.1 Agregar el botón de editar */}
                        <button onClick={() => editar(elt)}>
                            Editar
                        </button>

                    </div>
                )
            })
        }

        </>
    )
}
