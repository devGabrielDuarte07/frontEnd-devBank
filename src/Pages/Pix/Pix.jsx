import './Pix.css'

import Sidebar from '@/components/Sidebar/Sidebar'

import {
    FaPix,
    FaKey,
    FaPaperPlane
} from 'react-icons/fa6'

import { useEffect, useState } from 'react'

import {
    listarChaves
} from '@/services/pixService'

import ModalCriarChave from '@/components/Pix/ModalCriarChave/ModalCriarChave'

import PixModal from '@/components/Pix/PixModal/PixModal'

import ListaChavesPix from '@/components/Pix/ListaChavesPix/ListaChavesPix'

import PixCard from '@/components/Pix/PixCard/PixCard'

export default function Pix() {

    const [chaves, setChaves] = useState([])

    const [abrirModalChave, setAbrirModalChave] = useState(false)

    const [abrirModalPix, setAbrirModalPix] = useState(false)

    const [mostrarChaves, setMostrarChaves] = useState(false)

    useEffect(() => {

        carregarChaves()

    }, [])

    async function carregarChaves() {

        try {

            const response = await listarChaves()

            setChaves(response.dados)

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="pix-container">

            <Sidebar />

            <main className="pix-content">

                <div className="pix-header">

                    <div>

                        <h1>PIX</h1>

                        <p>
                            Envie e receba transferências instantâneas.
                        </p>

                    </div>

                    <div className="pix-balance">

                        <span>Saldo disponível</span>

                        <h2>R$ 12.450,00</h2>

                    </div>

                </div>

                <section className="pix-actions">

                    <PixCard
                        icon={<FaPaperPlane />}
                        titulo="Enviar PIX"
                        descricao="
                        Faça transferências usando CPF,
                        email, telefone ou chave aleatória.
                        "
                        textoBotao="Enviar agora"
                        onClick={() =>
                            setAbrirModalPix(true)
                        }
                    />

                    <PixCard
                        icon={<FaKey />}
                        titulo="Minhas Chaves"
                        descricao="
                        Gerencie suas chaves PIX cadastradas.
                        "
                        textoBotao={
                            mostrarChaves
                                ? 'Ocultar chaves'
                                : 'Ver chaves'
                        }
                        onClick={() =>
                            setMostrarChaves(!mostrarChaves)
                        }
                    />

                    <PixCard
                        icon={<FaPix />}
                        titulo="Criar Chave"
                        descricao="
                        Cadastre uma nova chave PIX para
                        receber transferências.
                        "
                        textoBotao="Criar chave"
                        onClick={() =>
                            setAbrirModalChave(true)
                        }
                    />

                </section>

                {
                    mostrarChaves && (

                        <ListaChavesPix
                            chaves={chaves}
                        />

                    )
                }

                {
                    abrirModalChave && (

                        <ModalCriarChave
                            fechar={() =>
                                setAbrirModalChave(false)
                            }
                        />

                    )
                }

                {
                    abrirModalPix && (

                        <PixModal
                            onClose={() =>
                                setAbrirModalPix(false)
                            }
                        />

                    )
                }

            </main>

        </div>
    )
}