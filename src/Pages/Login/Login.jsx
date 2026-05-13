import './Login.css'

import logoBranca from '../../assets/imagens/logoBranca.png'
import logoRoxa from '../../assets/imagens/logoRoxa.png'

import { useState, useEffect } from 'react'

import { login } from '../../services/AuthService'

import { useNavigate, Link } from 'react-router-dom'

import {
    FaMoon,
    FaSun
} from 'react-icons/fa'

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    )

    useEffect(() => {

        if (darkMode) {

            document.body.classList.add('dark')

            localStorage.setItem('theme', 'dark')

        } else {

            document.body.classList.remove('dark')

            localStorage.setItem('theme', 'light')
        }

    }, [darkMode])

    function toggleTheme() {

        setDarkMode(prev => !prev)
    }

    async function fazerLogin() {

        try {

            const data = await login(email, senha)

            localStorage.setItem('token', data.token)

            navigate('/dashboard')

        } catch (error) {

            console.error(
                'Erro ao fazer login:',
                error.response?.data || error.message
            )
        }
    }

    return (

        <div className="login-container">

            <div className="container-esquerdo">

                <div className="left-content">

                    <div className="logo">

                        <img
                            src={logoBranca}
                            alt="logo"
                        />

                        <h1>DevBank</h1>

                    </div>

                    <p>
                        Simples, moderno e feito para você.
                        Acesse sua conta e cuide do seu dinheiro
                    </p>

                </div>

            </div>

            <div className="container-direito">

                <div className="login-box">

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                    >
                        {
                            darkMode
                                ? <FaSun />
                                : <FaMoon />
                        }
                    </button>

                    <div className="login-header">

                        <img
                            src={logoRoxa}
                            alt="logo"
                        />

                        <h1>Acesse sua conta</h1>

                    </div>

                    <div className="input-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={e =>
                                setEmail(e.target.value)
                            }
                        />

                    </div>

                    <div className="input-group">

                        <label htmlFor="password">
                            Senha
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={e =>
                                setSenha(e.target.value)
                            }
                        />

                    </div>

                    <div className="login-options">

                        <label className="remember-me">

                            <input type="checkbox" />

                            Lembrar de mim

                        </label>

                        <Link to="/recuperar-senha">

                            Esqueci minha senha

                        </Link>

                    </div>

                    <button onClick={fazerLogin} className="login-submit">

                        Entrar

                    </button>

                    <div className="divider">

                        <div className="line"></div>

                        <span>
                            ou continue com
                        </span>

                        <div className="line"></div>

                    </div>

                    <button
                        className="register-btn"
                        onClick={() =>
                            navigate('/cadastro')
                        }
                    >
                        Cadastrar nova conta
                    </button>

                </div>

            </div>

        </div>
    )
}