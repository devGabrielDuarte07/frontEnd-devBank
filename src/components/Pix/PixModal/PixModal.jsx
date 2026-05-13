import { useState } from 'react'

import './PixModal.css'

import { pix }
    from '../../../services/contaService'

import toast from 'react-hot-toast'
import ConfirmModal from '../../../components/ConfirmModal/ConfirmModal'

export default function PixModal({
    atualizarDados,
    onClose
}) {
    const [confirmar, setConfirmar] =
        useState(false)
    const [chave, setChave] = useState('')

    const [valor, setValor] = useState('')

    async function fazerPix() {

        try {

            await pix(
                chave,
                Number(valor)
            )

            toast.success('Pix realizado')

            atualizarDados()

            setChave('')
            setValor('')
            setConfirmar(false)
            onClose()

        } catch (error) {

            console.error(error)

            toast.error(error.response?.data?.mensagem)
        }
    }

    return (

        <div className="pix-modal">

            <button
                className="close-btn"
                onClick={onClose}
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
                Confirmar Pix
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
                        variant = 'primary'
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