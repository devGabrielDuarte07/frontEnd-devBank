import { useState } from 'react'

import './PixModal.css'

import { pix }
    from '../../../services/contaService'

import toast from 'react-hot-toast'

import ConfirmModal
    from '../../../components/ConfirmModal/ConfirmModal'

export default function PixModal({
    atualizarDados,
    onClose
}) {

    const [confirmar, setConfirmar] =
        useState(false)

    const [chave, setChave] =
        useState('')

    const [valor, setValor] =
        useState('')

    const [loading, setLoading] =
        useState(false)

    async function fazerPix() {

        if (!chave || !valor) {
            return toast.error(
                'Preencha todos os campos'
            )
        }

        if (Number(valor) <= 0) {
            return toast.error(
                'Valor inválido'
            )
        }

        try {

            setLoading(true)

            await pix(
                chave,
                Number(valor)
            )

            toast.success(
                'Pix realizado'
            )

            atualizarDados()

            setChave('')
            setValor('')

            setConfirmar(false)

            onClose()

        } catch (error) {

            console.error(error)

            toast.error(
                error.response?.data?.mensagem ||
                'Erro ao realizar Pix'
            )

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="pix-modal">

            <button
                className="close-btn"
                onClick={onClose}
                disabled={loading}
            >
                ✕
            </button>

            <h2>Fazer Pix</h2>

            <input
                type="text"
                placeholder="Chave pix (CPF, email ou telefone)"
                value={chave}
                onChange={(e) =>
                    setChave(e.target.value)
                }
                disabled={loading}
            />

            <input
                type="number"
                placeholder="Digite o valor"
                value={valor}
                onChange={(e) =>
                    setValor(e.target.value)
                }
                disabled={loading}
            />

            <button
                onClick={() =>
                    setConfirmar(true)
                }
                disabled={loading}
            >
                {
                    loading
                        ? 'Enviando Pix...'
                        : 'Confirmar Pix'
                }
            </button>

            {
                confirmar && (

                    <ConfirmModal

                        titulo="Confirmar Pix"

                        descricao={
                            `Deseja enviar
                            ${Number(valor).toLocaleString(
                                'pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }
                            )}
                            para a chave
                            ${chave}?`
                        }

                        variant="primary"

                        onConfirm={fazerPix}

                        onClose={() =>
                            setConfirmar(false)
                        }

                    />

                )
            }

        </div>
    )
}