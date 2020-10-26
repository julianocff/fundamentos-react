import React from 'react'

export default (props) => {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min)) + min
    return (
        <>
            <h1>Resultado do num ale entre 1 a 10</h1>
            <p>Valor maximo: {max} </p>
            <p>Valor minimo: {min} </p>
            <p>Resultado: {random} </p>
        </>
    )
}