import './Sidebar.css'

import logo from '../../assets/imagens/logo-roxa.png'

import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
    FaHome,
    FaFileInvoiceDollar,
    FaMoneyBillWave,
    FaExchangeAlt,
    FaUser,
    FaSignOutAlt
} from 'react-icons/fa'

import { SiPix } from 'react-icons/si'

import { MdArrowDownward } from 'react-icons/md'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'


export default function Sidebar() {
    const [confirmar, setConfirmar] =
        useState(false)
    const [open, setOpen] =
        useState(false)
    const navigate = useNavigate()

    function sair() {

        localStorage.removeItem('token')

        navigate('/login')
    }

    return (
        <>
            <button
                className="menu-btn"
                onClick={() =>
                    setOpen(!open)
                }
            >
                ☰
            </button>
            {
                open && (

                    <div
                        className="sidebar-overlay"
                        onClick={() =>
                            setOpen(false)
                        }
                    />

                )
            }
            <aside
                className={`sidebar ${open ? 'open' : ''}`}
            >

                <div>

                    <div className="sidebar-logo">
                        <img src={logo} alt="logo" />
                        <h2>DevBank</h2>
                    </div>

                    <nav className="sidebar-menu">

                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <FaHome />
                            Início
                        </NavLink>

                        <NavLink
                            to="/extrato"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <FaFileInvoiceDollar />
                            Extrato
                        </NavLink>

                        <NavLink
                            to="/deposito"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <FaMoneyBillWave />
                            Depósito
                        </NavLink>

                        <NavLink
                            to="/saque"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <MdArrowDownward />
                            Saque
                        </NavLink>

                        <NavLink
                            to="/transferencia"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <FaExchangeAlt />
                            Transferência
                        </NavLink>

                        <NavLink
                            to="/pix"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <SiPix />
                            Pix
                        </NavLink>

                        <NavLink
                            to="/perfil"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <FaUser />
                            Perfil
                        </NavLink>

                    </nav>

                </div>

                <button
                    className="logout-btn"
                    onClick={() => setConfirmar(true)}
                >
                    <FaSignOutAlt />
                    Sair
                </button>
                {
                    confirmar && (

                        <ConfirmModal

                            titulo="Sair da conta"

                            descricao={
                                'Deseja realmente sair da sua conta?'
                            }

                            variant="danger"

                            onConfirm={sair}

                            onClose={() =>
                                setConfirmar(false)
                            }

                        />

                    )
                }
            </aside>
        </>
    )
}