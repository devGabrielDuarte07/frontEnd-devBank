import { useState } from 'react'

import './SaqueModal.css'

import { sacar }
    from '../../services/contaService'
import toast from 'react-hot-toast'

import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'


export default function SaqueModal({
    atualizarDados,
    onClose
}) {

    const [confirmar, setConfirmar] =
        useState(false)

    const [valor, setValor] =
        useState('')

    async function fazerSaque() {

        try {

            await sacar(
                Number(valor)
            )

            toast.success('Saque realizado')

            atualizarDados()

            setValor('')

            onClose()

        } catch (error) {

            console.error(error)

            toast.error(error.response?.data?.mensagem)
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
                onClick={() => setConfirmar(true)}
            >
                Confirmar saque
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