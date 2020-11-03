import React, { useState } from 'react'
import Css from './Input.css'

export default (props) => {
    const [valor, setValor] = useState('Inicial')
    function qndMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div>
            <div className="input">
                <input value={valor} onChange={qndMudar} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}