import { useState } from 'react'

import './DepositModal.css'

import { depositar }
    from '../../services/contaService'

import toast from 'react-hot-toast'

import ConfirmModal
    from '../../components/ConfirmModal/ConfirmModal'

export default function DepositModal({
    atualizarDados,
    onClose
}) {

    const [confirmar, setConfirmar] =
        useState(false)

    const [valor, setValor] =
        useState('')

    const [loading, setLoading] =
        useState(false)

    async function fazerDeposito() {

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

            await depositar(
                Number(valor)
            )

            toast.success(
                'Depósito realizado'
            )

            atualizarDados()

            setValor('')

            setConfirmar(false)

            onClose()

        } catch (error) {

            console.error(error)

            toast.error(
                error.response?.data?.mensagem ||
                'Erro ao depositar'
            )

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="deposit-modal">

            <button
                className="close-btn"
                onClick={onClose}
                disabled={loading}
            >
                ✕
            </button>

            <h2>Depositar</h2>

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
                        ? 'Depositando...'
                        : 'Confirmar depósito'
                }
            </button>

            {
                confirmar && (

                    <ConfirmModal

                        titulo="Confirmar depósito"

                        descricao={
                            `Deseja depositar
                            ${Number(valor).toLocaleString(
                                'pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }
                            )}?`
                        }

                        onConfirm={fazerDeposito}

                        onClose={() =>
                            setConfirmar(false)
                        }

                    />

                )
            }

        </div>
    )
}