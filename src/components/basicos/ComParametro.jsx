import React from 'react'

export default function ComParametro(props) {
    const { nome, nota } = props
    const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <>
            <p>Nome: {nome}</p>
            <p>Nota: {nota}</p>
            <p>Situacao: {status} </p>
        </>
    )
}