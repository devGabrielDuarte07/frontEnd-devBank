import './ActionsCard.css'

import {
    FaMoneyBillWave,
    FaExchangeAlt
} from 'react-icons/fa'

import { SiPix } from 'react-icons/si'

import { MdArrowDownward } from 'react-icons/md'

export default function ActionsCard() {
    return (
        <div className="actions-card">

            <h3>Ações rápidas</h3>

            <div className="actions-grid">

                <div className="action-item">
                    <FaMoneyBillWave />
                    <span>Depositar</span>
                </div>

                <div className="action-item">
                    <MdArrowDownward />
                    <span>Sacar</span>
                </div>

                <div className="action-item">
                    <FaExchangeAlt />
                    <span>Transferir</span>
                </div>

                <div className="action-item">
                    <SiPix />
                    <span>Pix</span>
                </div>

            </div>

        </div>
    )
}