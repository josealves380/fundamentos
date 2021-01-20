import './App.css'
import React from 'react';

import Card from './components/basicos/layout/Card'

import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#8 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>
            <Card titulo="#7 - Produtos" color="#3A9AD9">
                <TabelaProdutos/>
            </Card>
            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAlunos/>
            </Card>
            <Card titulo="#5 - Componente com filhos" color="#00c8f8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="José" />
                </Familia>
            </Card>
            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#2 - Com Paramêtro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>
            <Card titulo="#1 - Primeiro" color="#588c73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>