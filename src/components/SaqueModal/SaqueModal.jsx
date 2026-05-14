import { useState } from 'react'

import './SaqueModal.css'

import { sacar }
    from '../../services/contaService'

import toast from 'react-hot-toast'

import ConfirmModal
    from '../../components/ConfirmModal/ConfirmModal'

export default function SaqueModal({
    atualizarDados,
    onClose
}) {

    const [confirmar, setConfirmar] =
        useState(false)

    const [valor, setValor] =
        useState('')

    const [loading, setLoading] =
        useState(false)

    async function fazerSaque() {

        if (!valor) {
            return toast.error(
                'Digite um valor'
            )
        }

        if (Number(valor) <= 0) {
            return toast.error(
                'Valor inválido'
            )
        }

        try {

            setLoading(true)

            await sacar(
                Number(valor)
            )

            toast.success(
                'Saque realizado'
            )

            atualizarDados()

            setValor('')

            setConfirmar(false)

            onClose()

        } catch (error) {

            console.error(error)

            toast.error(
                error.response?.data?.mensagem ||
                'Erro ao realizar saque'
            )

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="saque-modal">

            <button
                className="close-btn"
                onClick={onClose}
                disabled={loading}
            >
                ✕
            </button>

            <h2>Sacar</h2>

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
                        ? 'Sacando...'
                        : 'Confirmar saque'
                }
            </button>

            {
                confirmar && (

                    <ConfirmModal

                        titulo="Confirmar saque"

                        descricao={
                            `Deseja sacar
                            ${Number(valor).toLocaleString(
                                'pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }
                            )}?`
                        }

                        onConfirm={fazerSaque}

                        onClose={() =>
                            setConfirmar(false)
                        }

                    />

                )
            }

        </div>
    )
}