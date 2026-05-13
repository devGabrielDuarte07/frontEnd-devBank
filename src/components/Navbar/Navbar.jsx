import './Navbar.css'

import {
    FaBell,
    FaUser,
    FaMoon,
    FaSun
} from 'react-icons/fa'

import {
    useEffect,
    useState
} from 'react'

export default function Navbar({
    usuario
}) {

    const [dark, setDark] =
        useState(false)

    useEffect(() => {

        const theme =
            localStorage.getItem('theme')

        if (theme === 'dark') {

            document.body.classList.add(
                'dark'
            )

            setDark(true)
        }

    }, [])

    function toggleTheme() {

        const novoTema = !dark

        setDark(novoTema)

        document.body.classList.toggle(
            'dark'
        )

        localStorage.setItem(
            'theme',
            novoTema
                ? 'dark'
                : 'light'
        )
    }

    return (

        <header className="navbar">

            <div>

                <h1>
                    Olá, {usuario?.nome}! 👋
                </h1>

                <p>
                    Bem-vindo ao DevBank
                </p>

            </div>

            <div className="navbar-right">

                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                >

                    {
                        dark
                            ? <FaSun />
                            : <FaMoon />
                    }

                </button>

                <div className="notification">

                    <FaBell />

                    <span>1</span>

                </div>

                <div className="profile">

                    <FaUser />

                    <span>
                        {usuario?.nome}
                    </span>

                </div>

            </div>

        </header>
    )
}