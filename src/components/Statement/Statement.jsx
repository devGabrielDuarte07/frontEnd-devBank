import './Statement.css'

import { SiPix } from 'react-icons/si'

export default function Statement() {
    return (
        <section className="statement">

            <h3>Extrato</h3>

            <div className="transaction">

                <div className="transaction-left">
                    <SiPix />
                    <span>Pix recebido</span>
                </div>

                <strong>+ R$ 500,00</strong>

            </div>

            <div className="transaction">

                <div className="transaction-left">
                    <SiPix />
                    <span>Pix recebido</span>
                </div>

                <strong>+ R$ 500,00</strong>

            </div>

        </section>
    )
}