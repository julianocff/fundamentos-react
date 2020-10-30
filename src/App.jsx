import './App.css'
import React, { Fragment } from 'react'
import ComParametro from './components/basicos/ComParametro'
import NumAle from './components/basicos/NumAle'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/basicos/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaALunos'
import Produtos from './components/repeticao/Produtos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'


export default () =>
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards" >
            {/* <Card titulo="">

            </Card> */}

            <Card titulo="Comunicação Indireta">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Comunicação Direta">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Usuario">
                <UsuarioInfo usuario={{ nome: 'Juliano' }} />
                <UsuarioInfo usuario={{ nome: ' ' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
                <UsuarioInfo usuario={{ nome: 'Juliano Fripp' }} />
            </Card>
            <Card titulo="Renderização Condicional">
                <ParOuImpar num={30}></ParOuImpar>
            </Card>
            <Card titulo="Repetição 2">
                <Produtos></Produtos>
            </Card>
            <Card titulo="Repetição">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Componente com FIlhos" color="#066">
                <Familia sobrenome="Fripp">
                    <FamiliaMembro nome="Nome"></FamiliaMembro>
                    <FamiliaMembro nome="Nome"></FamiliaMembro>
                    <FamiliaMembro nome="Nome"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="Numero aleatorio entre 1 e 10" color='#064'>
                <NumAle min={1} max={10} />
            </Card>
            <Card titulo="ERRO">
                <Fragmento />
            </Card>
            <Card titulo="Boletin" color='#000'>
                <h1>Resultado final alunos</h1>
                <ComParametro nome="Juliano"
                    nota={6.9} />
                <ComParametro nome="Andressa"
                    nota={9} />
            </Card>
            <Card titulo="Boletin" color='#564'>
                <h1>Resultado final alunos</h1>
                <ComParametro nome="Juliano"
                    nota={6.9} />
                <ComParametro nome="Andressa"
                    nota={9} />
            </Card>
        </div>
    </div >