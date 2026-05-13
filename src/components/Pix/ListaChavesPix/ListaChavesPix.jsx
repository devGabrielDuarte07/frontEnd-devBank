import './ListaChavesPix.css'

import { useState } from 'react'

import ModalExcluirChave from '../ModalExcluirChave/ModalExcluirChave'

export default function ListaChavesPix({
    chaves
}) {

    const [
        abrirModalExcluir,
        setAbrirModalExcluir
    ] = useState(false)

    const [
        chaveSelecionada,
        setChaveSelecionada
    ] = useState(null)

    return (

        <section className="pix-keys">

            <div className="keys-header">

                <h2>Minhas Chaves PIX</h2>

                <span>
                    {chaves.length} chave(s)
                </span>

            </div>

            <div className="keys-list">

                {
                    chaves.length === 0 && (

                        <div className="empty-keys">

                            <p>
                                Nenhuma chave PIX cadastrada.
                            </p>

                        </div>

                    )
                }

                {
                    chaves.map(chave => (

                        <div
                            className="key-item"
                            key={chave.id}
                        >

                            <div className="key-info">

                                <div className="key-badge">

                                    {
                                        chave.tipo === 'EMAIL' && '📧'
                                    }

                                    {
                                        chave.tipo === 'CPF' && '🪪'
                                    }

                                    {
                                        chave.tipo === 'TELEFONE' && '📱'
                                    }

                                    {
                                        chave.tipo === 'ALEATORIA' && '🔑'
                                    }

                                </div>

                                <div>

                                    <strong>
                                        {chave.tipo}
                                    </strong>

                                    <p>
                                        {chave.chave}
                                    </p>

                                </div>

                            </div>

                            <button
                                className="delete-key-btn"
                                onClick={() => {

                                    setChaveSelecionada(chave)

                                    setAbrirModalExcluir(true)

                                }}
                            >
                                Excluir
                            </button>

                        </div>

                    ))
                }

            </div>

            {
                abrirModalExcluir && (

                    <ModalExcluirChave
                        chavePix={chaveSelecionada}
                        fechar={() =>
                            setAbrirModalExcluir(false)
                        }
                    />

                )
            }

        </section>
    )
}