import React from 'react'
import alunos from '../../data/alunos'

export default (props) => {
    const alunosLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                ID: {aluno.id} -
                Nome: {aluno.nome} -
                Nota: {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {alunosLI}
            </ul>
        </div>
    )
}