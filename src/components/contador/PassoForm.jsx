import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor="passo">Passo:</label>
            <input id="passo"
                value={props.passo}
                type="number"
                onChange={e => props.funcPasso(+e.target.value)} />
        </div>
    )
}