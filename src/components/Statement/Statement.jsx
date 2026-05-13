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

    return (

        <div className="statement">

            <h2>Extrato</h2>

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

                                    <p>
                                        {
                                            new Date(
                                                transacao.data
                                            ).toLocaleDateString(
                                                'pt-BR'
                                            )
                                        }
                                    </p>

                                </div>

                            </div>

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

                        </div>
                    )
                })
            }

        </div>
    )
}