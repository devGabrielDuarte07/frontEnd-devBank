import './BalanceCard.css'

import { FaUniversity } from 'react-icons/fa'

export default function BalanceCard() {
    return (
        <div className="balance-card">

            <div className="balance-info">

                <p>Saldo atual</p>

                <h2>R$ 2.450,00</h2>

                <span>Conta corrente: 12345-6</span>

            </div>

            <FaUniversity className="bank-icon" />

        </div>
    )
}