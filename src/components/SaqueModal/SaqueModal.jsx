import { useState } from 'react'

import './SaqueModal.css'

import { sacar }
    from '@/services/ContaService'

export default function SaqueModal({
    atualizarDados,
    onClose
}) {

    const [valor, setValor] =
        useState('')

    async function fazerSaque() {

        try {

            await sacar(
                Number(valor)
            )

            alert('Saque realizado')

            atualizarDados()

            setValor('')

            onClose()

        } catch (error) {

            console.error(error)

            alert('Erro ao sacar')
        }
    }

    return (

        <div className="saque-modal">

            <button
                className="close-btn"
                onClick={onClose}
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
            />

            <button
                onClick={fazerSaque}
            >
                Confirmar saque
            </button>

        </div>
    )
}