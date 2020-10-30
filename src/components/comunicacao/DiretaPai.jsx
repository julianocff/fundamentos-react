import React from 'react'
import DiretaFilho from './DiretaFilho'

export default (props) => {
    return (
        <div>
            <DiretaFilho texto="Texto aqui" numero={28} bool={false}/>
            <DiretaFilho texto="Texto aqui 2" numero={30} bool={true}/>
        </div>
    )
}