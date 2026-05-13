import './ActionsCard.css'

import {
    FaMoneyBillWave,
    FaExchangeAlt
} from 'react-icons/fa'

import { SiPix } from 'react-icons/si'

import { MdArrowDownward } from 'react-icons/md'

export default function ActionsCard({ onOpenDeposit, onOpenSaque, onOpenTransfer, onOpenPix }) {

    return (
        <div className="actions-card">

            <h3>Ações rápidas</h3>

            <div className="actions-grid">

                <div
                    className="action-item"
                    onClick={onOpenDeposit}
                >
                    <FaMoneyBillWave />
                    <span>Depositar</span>
                </div>

                <div 
                    className="action-item"
                    onClick={onOpenSaque}
                >
                    <MdArrowDownward />
                    <span>Sacar</span>
                </div>

                <div className="action-item" onClick={onOpenTransfer}>
                    <FaExchangeAlt />
                    <span>Transferir</span>
                </div>

                <div className="action-item" onClick={onOpenPix}>
                    <SiPix />
                    <span>Pix</span>
                </div>

            </div>

        </div>
    )
}