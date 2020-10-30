import React from 'react'
import Css from './Card.css'

export default (props) => {
    const cardStyleTitulo = {
        backgroundColor: props.color || '#F00',
        border: props.color || '#F00',
    }
    return (
        <div className="card">
            <div className="titulo" style={cardStyleTitulo}>
                {props.titulo}
            </div>
            <div className="conteudo">
                {props.children}
            </div>
        </div>
    )
}