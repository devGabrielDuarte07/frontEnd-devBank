import './Cadastro.css'

import logo from '@/assets/imagens/logo-roxa.png'
import card from '@/assets/imagens/cartaoDevBank.png'

import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

export default function Register() {
    return (
        <div className="register-container">

            {/* LADO ESQUERDO */}

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

            {/* LADO DIREITO */}

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
                            />
                        </div>

                    </div>

                    {/* ROW */}

                    <div className="row">

                        <div className="input-group">

                            <label>Data de nascimento</label>

                            <div className="input-icon">
                                <MdDateRange />

                                <input
                                    type="text"
                                    placeholder="dd/mm/aaaa"
                                />
                            </div>

                        </div>

                        <div className="input-group">

                            <label>Telefone</label>

                            <div className="input-icon">
                                <FaPhone />

                                <input
                                    type="text"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                        </div>

                    </div>

                    {/* SENHA */}

                    <div className="input-group">

                        <label>Senha</label>

                        <div className="input-icon">
                            <FaLock />

                            <input
                                type="password"
                                placeholder="Digite sua senha"
                            />
                        </div>

                    </div>

                    {/* CONFIRMAR SENHA */}

                    <div className="input-group">

                        <label>Confirmar senha</label>

                        <div className="input-icon">
                            <FaLock />

                            <input
                                type="password"
                                placeholder="Confirme sua senha"
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

                    <button className="register-btn">
                        Criar conta
                    </button>

                    {/* DIVIDER */}

                    <div className="divider">

                        <div className="line"></div>

                        <span>ou</span>

                        <div className="line"></div>

                    </div>

                    {/* LOGIN */}

                    <button className="login-btn">
                        Já tenho uma conta?
                        <span> Entrar</span>
                    </button>

                </div>

            </div>

        </div>
    )
}