import { useState } from 'react'

import './TransferirModal.css'

import { transferir }
    from '../../services/ContaService'
import toast from 'react-hot-toast'
import ConfirmModal
    from '../../components/ConfirmModal/ConfirmModal'

export default function TransferirModal({
    atualizarDados,
    onClose
}) {
    const [confirmar, setConfirmar] =
        useState(false)
    const [cpfContaDestino, setCpfContaDestino] =
        useState('')

    const [valor, setValor] =
        useState('')

    async function fazerTransferencia() {

        if (!cpfContaDestino || !valor) {
            return toast.error('Preencha todos os campos')
        }

        if (Number(valor) <= 0) {
            return toast.error('Valor inválido')
        }

        try {

            await transferir(
                cpfContaDestino,
                Number(valor)
            )

            toast.success('Transferência realizada')

            atualizarDados()

            setCpfContaDestino('')
            setValor('')

            setConfirmar(false)

            onClose()

        } catch (error) {

            console.error(error)

            toast.error(error.response?.data?.mensagem || "Erro ao realizar transferência")
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
                onClick={() => setConfirmar(true)}
            >
                Confirmar transferência
            </button>
            {
                confirmar && (

                    <ConfirmModal

                        titulo="Confirmar transferência"

                        descricao={
                            `Deseja transferir
                                ${Number(valor).toLocaleString(
                                'pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }
                            )}
                                para o CPF
                                ${cpfContaDestino}?`
                        }

                        variant="sucess"
                        
                        onConfirm={fazerTransferencia}

                        onClose={() =>
                            setConfirmar(false)
                        }

                    />

                )
            }
        </div>
    )
}