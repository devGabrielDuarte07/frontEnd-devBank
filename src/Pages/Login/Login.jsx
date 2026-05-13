import './Login.css'
import logoBranca from '@/assets/imagens/logo-branca.png'
import logoRoxa from '@/assets/imagens/logo-roxa.png'
import { useState } from 'react'
import { login } from '@/services/AuthService'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function fazerLogin() {
        try {

            const data = await login(email, senha)
            console.log('Token recebido:', data)
            localStorage.setItem('token', data.token)
            
            navigate('/dashboard')

        }
        catch (error) {
            console.error('Erro ao fazer login:', error.response.data)
        }
    }

    return (
        <div className="login-container">

            <div className="container-esquerdo">

                <div className="left-content">

                    <div className="logo">
                        <img src={logoBranca} alt="logo" />
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

                    <div className="login-header">
                        <img src={logoRoxa} alt="logo" />
                        <h1>Acesse sua conta</h1>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>

                        <input
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div className="login-options">

                        <label className="remember-me">
                            <input type="checkbox" />
                            Lembrar de mim
                        </label>

                        <a href="#">Esqueci minha senha</a>

                    </div>

                    <button onClick={fazerLogin}>Entrar</button>

                    <div className="divider">

                        <div className="line"></div>

                        <span>ou continue com</span>

                        <div className="line"></div>

                    </div>

                    <button className="register-btn" onClick={() => navigate("/cadastro")}>
                        Cadastrar nova conta
                    </button>
                </div>

            </div>

        </div>
    )
}