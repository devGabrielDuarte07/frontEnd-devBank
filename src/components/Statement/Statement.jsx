import './Statement.css'

import {
    FaMoneyBillWave,
    FaExchangeAlt,
    FaArrowDown,
    FaArrowUp
} from 'react-icons/fa'

import { SiPix } from 'react-icons/si'

const tiposTransacao = {

    P: {
        texto: 'Pix',
        icon: <SiPix />
    },

    D: {
        texto: 'Depósito',
        icon: <FaArrowDown />
    },

    S: {
        texto: 'Saque',
        icon: <FaArrowUp />
    },

    T: {
        texto: 'Transferência',
        icon: <FaExchangeAlt />
    },

    DEFAULT: {
        texto: 'Movimentação',
        icon: <FaMoneyBillWave />
    }
}

export default function Statement({
    transacoes
}) {

    function obterNomePessoa(transacao) {

        if (
            transacao.tipo === 'P' ||
            transacao.tipo === 'T'
        ) {

            return transacao.direcao === 'Entrada'
                ? `De: ${transacao.nomeOrigem}`
                : `Para: ${transacao.nomeDestino}`
        }

        return ''
    }

    return (
        <div className='statement-container'>
            <h2>Extrato</h2>
            <div className="statement-list">



                {
                    transacoes?.map(
                        (transacao, index) => {

                            const tipoInfo =
                                tiposTransacao[
                                transacao.tipo
                                ] || tiposTransacao.DEFAULT

                            return (

                                <div
                                    className="transaction"
                                    key={index}
                                >

                                    <div
                                        className="transaction-left"
                                    >

                                        <div className="icon">

                                            {tipoInfo.icon}

                                        </div>

                                        <div>

                                            <h3>
                                                {tipoInfo.texto}
                                            </h3>

                                            {
                                                obterNomePessoa(
                                                    transacao
                                                ) && (
                                                    <p className="transaction-person">
                                                        {
                                                            obterNomePessoa(
                                                                transacao
                                                            )
                                                        }
                                                    </p>
                                                )
                                            }

                                        </div>

                                    </div>

                                    <div className="transaction-right">

                                        <span
                                            className={
                                                transacao.direcao ===
                                                    'Entrada'
                                                    ? 'entrada'
                                                    : 'saida'
                                            }
                                        >

                                            {
                                                transacao.direcao ===
                                                    'Entrada'
                                                    ? '+'
                                                    : '-'
                                            }

                                            R$ {transacao.valor}

                                        </span>

                                        <p className="transaction-date">

                                            {
                                                new Date(
                                                    transacao.data
                                                ).toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    }
                                                )
                                            }

                                        </p>

                                    </div>

                                </div>
                            )
                        })
                }

            </div>
        </div>
    )
}