import React from 'react'
import If, { Else } from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={usuario && usuario.nome && usuario.nome.trim() !=='' }>
                <div>Bem vindo <strong> {usuario.nome} </strong></div>
                <Else>
                    <div>Bem vindo <strong> Usuario sem identificação </strong></div>
                </Else>
            </If>
        </div>
    )
}