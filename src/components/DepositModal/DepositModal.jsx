import { useState } from 'react'
import './DepositModal.css'

import { depositar }
    from '@/services/ContaService'

export default function DepositModal({
    atualizarDados,
    onClose
}) {

    const [valor, setValor] =
        useState('')

    async function fazerDeposito() {

        try {

            await depositar(
                Number(valor)
            )

            alert('Depósito realizado')

            atualizarDados()

            setValor('')

            onClose()

        } catch (error) {

            console.error(error)

            alert('Erro ao depositar')
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
                onClick={fazerDeposito}
            >
                Confirmar depósito
            </button>

        </div>
    )
}