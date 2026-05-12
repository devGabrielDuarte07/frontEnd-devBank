import './Login.css'
import logoBranca from '@/assets/imagens/logo-branca.png'
import logoRoxa from '@/assets/imagens/logo-roxa.png'

export default function Login() {
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
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>

                        <input
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

                    <button>Entrar</button>

                    <div className="divider">

                        <div className="line"></div>

                        <span>ou continue com</span>

                        <div className="line"></div>

                    </div>

                    <button className="register-btn">
                        Cadastrar nova conta
                    </button>
                </div>

            </div>

        </div>
    )
}