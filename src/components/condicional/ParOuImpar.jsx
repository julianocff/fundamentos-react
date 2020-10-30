import React from 'react'

export default (props) => {
    const numero = props.num % 2 === 0 ? 'Par' : 'Impar'
    
    return (
        <div>
            {numero}
        </div>
    )
}