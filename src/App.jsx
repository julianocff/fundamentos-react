import React, { Fragment } from 'react'
import ComParametro from './components/basicos/ComParametro'
import NumAle from './components/basicos/NumAle'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/basicos/layout/Card'


export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="Numero aleatorio entre 1 e 10">
            <NumAle min={1} max={10} />
        </Card>
        <Card titulo="ERRO">
            <Fragmento />
        </Card>
        <Card titulo="Boletin">
            <h1>Resultado final alunos</h1>
            <ComParametro nome="Juliano"
                nota={6.9} />
            <ComParametro nome="Andressa"
                nota={9} />
        </Card>
    </div>