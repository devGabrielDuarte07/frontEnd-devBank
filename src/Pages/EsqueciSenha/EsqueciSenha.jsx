import './EsqueciSenha.css'

import { FaTools } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function EmDesenvolvimento() {

    const navigate = useNavigate()

    return (

        <div className="dev-container">

            <div className="dev-card">

                <FaTools className="dev-icon" />

                <h1>Recuperação de acesso</h1>


                <p>
                    Esta funcionalidade estará disponível
                    em uma próxima atualização.
                </p>

                <button
                    onClick={() => navigate('/')}
                >
                    Voltar para o Login
                </button>

            </div>

        </div>
    )
}