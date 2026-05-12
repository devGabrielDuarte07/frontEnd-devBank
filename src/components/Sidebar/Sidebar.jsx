import './Sidebar.css'

import logo from '@/assets/imagens/logo-roxa.png'

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

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div>

                <div className="sidebar-logo">
                    <img src={logo} alt="logo" />
                    <h2>DevBank</h2>
                </div>

                <nav className="sidebar-menu">

                    <a className="active">
                        <FaHome />
                        Início
                    </a>

                    <a>
                        <FaFileInvoiceDollar />
                        Extrato
                    </a>

                    <a>
                        <FaMoneyBillWave />
                        Depósito
                    </a>

                    <a>
                        <MdArrowDownward />
                        Saque
                    </a>

                    <a>
                        <FaExchangeAlt />
                        Transferência
                    </a>

                    <a>
                        <SiPix />
                        Pix
                    </a>

                    <a>
                        <FaUser />
                        Perfil
                    </a>

                </nav>

            </div>

            <button className="logout-btn">
                <FaSignOutAlt />
                Sair
            </button>
    </aside>
)}