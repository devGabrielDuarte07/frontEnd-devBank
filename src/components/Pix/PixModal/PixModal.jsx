import { useState } from 'react'

import './PixModal.css'

import { pix }
    from '@/services/ContaService'

export default function PixModal({
    atualizarDados,
    onClose
}) {

    const [chave, setChave] = useState('')

    const [valor, setValor] = useState('')

    async function fazerPix() {

        try {

            await pix(
                chave,
                Number(valor)
            )

            alert('Pix realizado')

            atualizarDados()

            setChave('')
            setValor('')

            onClose()

        } catch (error) {

            console.error(error)

            alert('Erro ao realizar Pix')
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
                onClick={fazerPix}
            >
                Confirmar Pix
            </button>

        </div>
    )
}