import './Dashboard.css'

import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'
import BalanceCard from '@/components/BalanceCard/BalanceCard'
import ActionsCard from '@/components/ActionsCard/ActionsCard'
import Statement from '@/components/Statement/Statement'
import { buscarUsuario } from '@/services/usuarioService'
import { buscarTransacoes } from '@/services/TransacaoService'
import DepositModal from '@/components/DepositModal/DepositModal'
import SaqueModal from '@/components/SaqueModal/SaqueModal'
import TransferirModal from '@/components/TransferirModal/TransferirModal'
import PixModal from '@/components/Pix/PixModal/PixModal'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    const [transacoes, setTransacoes] = useState([])
    const [usuario, setUsuario] = useState(null)
    const [isDepositOpen, setIsDepositOpen] = useState(false)
    const [isSaqueOpen, setIsSaqueOpen] = useState(false)
    const [isTransferirOpen, setIsTransferOpen] = useState(false)
    const [isPixOpen, setIsPixOpen] = useState(false)

    async function atualizarDados() {

        const usuarioData =
            await buscarUsuario()

        const transacoesData =
            await buscarTransacoes()

        setUsuario(usuarioData)
        setTransacoes(transacoesData)
    }

    useEffect(() => {

        atualizarDados()

    }, [])


    return (
        <div className="dashboard-container">

            <Sidebar />

            <main className="main-content">

                <Navbar usuario={usuario} />

                <section className="top-area">
                    <BalanceCard usuario={usuario} />
                    <ActionsCard
                        onOpenDeposit={() => setIsDepositOpen(true)}
                        onOpenSaque={() => setIsSaqueOpen(true)}
                        onOpenTransfer={() => setIsTransferOpen(true)}
                        onOpenPix={() => setIsPixOpen(true)}
                    />

                    {isDepositOpen && (
                        <DepositModal
                            onClose={() => setIsDepositOpen(false)}
                            atualizarDados={atualizarDados}
                        />
                    )}

                    {isSaqueOpen && (
                        <SaqueModal
                            onClose={() => setIsSaqueOpen(false)}
                            atualizarDados={atualizarDados}
                        />
                    )}

                    {isTransferirOpen && (
                        <TransferirModal
                            onClose={() => setIsTransferOpen(false)}
                            atualizarDados={atualizarDados}
                        />
                    )}

                    {isPixOpen && (
                        <PixModal
                            onClose={() => setIsPixOpen(false)}
                            atualizarDados={atualizarDados}
                        />
                    )}
                </section>

                <Statement transacoes={transacoes} />

            </main>

        </div>
    )
}