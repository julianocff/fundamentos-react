import React from 'react'
import produtos from '../../data/produtos'
import Css from './Produtos.css'

export default (props) => {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'imp'}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="produtos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}