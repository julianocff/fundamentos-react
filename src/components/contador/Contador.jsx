import React from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends React.Component {
    state = {
        numero: this.props.numInicial || 0,
        passo: this.props.numPassoInicial || 5
    }

    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div>
                <div className="contador">
                    <h2>Contador</h2>
                    <Display numero={this.state.numero} />
                    <PassoForm passo={this.state.passo} funcPasso={this.setPasso}/>
                    <Botoes incrementar={this.incremento} decrementar={this.decremento} />
                </div>
            </div>
        )
    }
}