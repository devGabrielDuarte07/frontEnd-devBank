import './Navbar.css'

import { FaBell, FaUser } from 'react-icons/fa'

export default function Navbar() {
    return (
        <header className="navbar">

            <div>
                <h1>Olá, Gabriel! 👋</h1>
                <p>Bem-vindo ao DevBank</p>
            </div>

            <div className="navbar-right">

                <div className="notification">
                    <FaBell />
                    <span>1</span>
                </div>

                <div className="profile">
                    <FaUser />
                    <span>Gabriel Duarte</span>
                </div>

            </div>

        </header>
    )
}