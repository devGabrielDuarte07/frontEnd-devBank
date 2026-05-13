import './Cadastro.css'

import logo from '../../assets/imagens/logoRoxa.png'
import card from '../../assets/imagens/cartaoDevBank.png'

import { useNavigate } from 'react-router-dom'

import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaPhone,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa'

import { MdDateRange } from 'react-icons/md'

import { useState } from 'react'

import { criarUsuario } from '../../services/usuarioService'

export default function Register() {

    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const [mostrarSenha, setMostrarSenha] = useState(false)

    async function cadastrar() {

        try {

            if (senha !== confirmarSenha) {

                alert('As senhas não coincidem')
                return
            }

            await criarUsuario({

                nome,
                cpf,
                email,
                telefone,
                senha
            })

            alert('Conta criada com sucesso')

            navigate('/')

        } catch (error) {

            console.error(error)

            alert(
                error.response?.data?.mensagem ||
                'Erro ao criar conta'
            )
        }
    }

    return (

        <div className="register-container">

            <div className="container-esquerdo">

                <div className="left-content">

                    <div className="logo">

                        <img src={logo} alt="logo" />

                        <h1>DevBank</h1>

                    </div>

                    <div className="left-text">

                        <h2>Crie sua conta</h2>

                        <p>
                            É rápido, fácil e gratuito.
                            Preencha seus dados para começar.
                        </p>

                    </div>

                    <img
                        src={card}
                        alt="card"
                        className="card-image"
                    />

                </div>

            </div>

            <div className="container-direito">

                <div className="register-box">

                    <div className="register-header">

                        <div>

                            <h1>Cadastre-se</h1>

                            <p>
                                Informe seus dados para criar sua conta
                            </p>

                        </div>

                        <img src={logo} alt="logo" />

                    </div>

                    {/* NOME */}

                    <div className="input-group">

                        <label>Nome completo</label>

                        <div className="input-icon">

                            <FaUser />

                            <input
                                type="text"
                                placeholder="Digite seu nome completo"
                                value={nome}
                                onChange={e =>
                                    setNome(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* EMAIL */}

                    <div className="input-group">

                        <label>Email</label>

                        <div className="input-icon">

                            <FaEnvelope />

                            <input
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={e =>
                                    setEmail(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* CPF */}

                    <div className="input-group">

                        <label>CPF</label>

                        <div className="input-icon">

                            <FaUser />

                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={e =>
                                    setCpf(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* TELEFONE */}

                    <div className="input-group">

                        <label>Telefone</label>

                        <div className="input-icon">

                            <FaPhone />

                            <input
                                type="text"
                                placeholder="(00) 00000-0000"
                                value={telefone}
                                onChange={e =>
                                    setTelefone(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* SENHA */}

                    <div className="input-group">

                        <label>Senha</label>

                        <div className="password-input input-icon">

                            <FaLock />

                            <input
                                type={
                                    mostrarSenha
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={e =>
                                    setSenha(e.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() =>
                                    setMostrarSenha(prev => !prev)
                                }
                            >
                                {
                                    mostrarSenha
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                }
                            </button>

                        </div>

                    </div>

                    {/* CONFIRMAR SENHA */}

                    <div className="input-group">

                        <label>Confirmar senha</label>

                        <div className="password-input input-icon">

                            <FaLock />

                            <input
                                type={
                                    mostrarSenha
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Confirme sua senha"
                                value={confirmarSenha}
                                onChange={e =>
                                    setConfirmarSenha(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    </div>

                    {/* TERMOS */}

                    <div className="terms">

                        <label>

                            <input type="checkbox" />

                            Li e aceito os
                            <span> Termos de Uso </span>
                            e a
                            <span> Política de Privacidade</span>

                        </label>

                    </div>

                    {/* BOTÃO */}

                    <button
                        className="register-btn"
                        onClick={cadastrar}
                    >
                        Criar conta
                    </button>

                    {/* DIVIDER */}

                    <div className="divider">

                        <div className="line"></div>

                        <span>ou</span>

                        <div className="line"></div>

                    </div>

                    {/* LOGIN */}

                    <button
                        className="login-btn"
                        onClick={() => navigate("/")}
                    >
                        Já tenho uma conta?
                        <span> Entrar</span>
                    </button>

                </div>

            </div>

        </div>
    )
}