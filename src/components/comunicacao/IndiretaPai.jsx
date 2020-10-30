import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default (props) => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [legal, setlegal] = useState(false)

    function fornecerInformacoes(nome, idade, legal) {
        setNome(nome)
        setIdade(idade)
        setlegal(legal)
    }
    return (
        <div>
            <span>{nome} </span>
            <span> {idade} </span>
            <span> {legal ? 'Veradeiro' : 'Falso'} </span>
            <IndiretaFilho qndClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}