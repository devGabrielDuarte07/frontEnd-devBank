import { useState } from 'react'

import './TransferirModal.css'

import { transferir }
    from '@/services/ContaService'

export default function TransferirModal({
    atualizarDados,
    onClose
}) {

    const [cpfContaDestino, setCpfContaDestino] =
        useState('')

    const [valor, setValor] =
        useState('')

    async function fazerTransferencia() {

        try {

            await transferir(
                cpfContaDestino,
                Number(valor)
            )

            alert('Transferência realizada')

            atualizarDados()

            setCpfContaDestino('')
            setValor('')

            onClose()

        } catch (error) {

            console.error(error)

            alert('Erro ao transferir', error.response.data)
        }
    }

    return (

        <div className="transfer-modal">

            <button
                className="close-btn"
                onClick={onClose}
            >
                ✕
            </button>

            <h2>Transferir</h2>

            <input
                type="text"
                placeholder="CPF do destinatário"
                value={cpfContaDestino}
                onChange={(e) =>
                    setCpfContaDestino(e.target.value)
                }
            />

            <input
                type="number"
                placeholder="Digite o valor"
                value={valor}
                onChange={(e) =>
                    setValor(e.target.value)
                }
            />

            <button
                onClick={fazerTransferencia}
            >
                Confirmar transferência
            </button>

        </div>
    )
}