import React from 'react'

export default (props) => {
    const callBack = props.qndClicar
    const idMin = 10
    const idMax = 80
    const geraId = () => parseInt(Math.random() * (idMax - idMin) + idMin)
    const bool = Math.random()
    const geraBool = () => bool > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => callBack('Juliano', geraId(), geraBool())}>
                Fornecer Informações
            </button>
        </div>
    )
}