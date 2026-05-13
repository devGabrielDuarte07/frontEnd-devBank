import './BalanceCard.css'

import { FaUniversity } from 'react-icons/fa'
import {
    FaEye,
    FaEyeSlash
} from 'react-icons/fa'

import { useEffect, useState } from 'react'


export default function BalanceCard({ usuario }) {

    const [mostrarSaldo, setMostrarSaldo] = useState(

        localStorage.getItem('mostrarSaldo') !== 'false'
    )
    useEffect(() => {

        localStorage.setItem(
            'mostrarSaldo',
            mostrarSaldo
        )

    }, [mostrarSaldo])
    return (
        <div className="balance-card">

            <div className="balance-info">

                <p>Saldo atual</p>

                <div className="balance-value">

                    <p>
                        {
                            mostrarSaldo
                                ? usuario?.saldo?.toLocaleString(
                                    'pt-BR',
                                    {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }
                                )
                                : '••••••'
                        }
                    </p>

                    <button
                        className="toggle-balance"
                        onClick={() =>
                            setMostrarSaldo(prev => !prev)
                        }
                    >
                        {
                            mostrarSaldo
                                ? <FaEyeSlash />
                                : <FaEye />
                        }
                    </button>

                </div>

            </div>

            <FaUniversity className="bank-icon" />

        </div>
    )
}