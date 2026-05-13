import './BalanceCard.css'

import { FaUniversity } from 'react-icons/fa'

export default function BalanceCard({usuario}) {
    return (
        <div className="balance-card">
            
            <div className="balance-info">

                <p>Saldo atual</p>

                <h2>R$ {usuario?.saldo}</h2>


            </div>

            <FaUniversity className="bank-icon" />

        </div>
    )
}