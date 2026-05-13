import './EmDesenvolvimento.css'

import { FaTools } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function EmDesenvolvimento() {

    const navigate = useNavigate()

    return (

        <div className="dev-container">

            <div className="dev-card">

                <FaTools className="dev-icon" />

                <h1>Em desenvolvimento</h1>

                <p>
                    Esta funcionalidade ainda está sendo construída.
                </p>

                <button
                    onClick={() => navigate('/dashboard')}
                >
                    Voltar para o Dashboard
                </button>

            </div>

        </div>
    )
}