import { useState } from 'react'
import './DepositModal.css'

import { depositar }
    from '../../services/ContaService'
    

import toast from 'react-hot-toast'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'
export default function DepositModal({
    atualizarDados,
    onClose
}) {
    const [confirmar, setConfirmar] =
        useState(false)
    const [valor, setValor] =
        useState('')

    async function fazerDeposito() {

        try {

            await depositar(
                Number(valor)
            )


            toast.success('Depósito realizado')

            atualizarDados()

            setValor('')

            onClose()

        } catch (error) {

            console.error(error)

            toast.error(error.response?.data?.mensagem || 'Erro ao depositar')
        }
    }

    return (

        <div className="deposit-modal">

            <button
                className="close-btn"
                onClick={onClose}
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
            />

            <button
                onClick={() => setConfirmar(true)}
            >
                Confirmar depósito
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