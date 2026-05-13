import Sidebar from '../../components/Sidebar/Sidebar'
import EmDesenvolvimento from '../../components/EmDesenvolvimento/EmDesenvolvimento'

import './Saque.css'

export default function Saque() {

    return (

        <div className="saque-container">

            <Sidebar />

            <main className="saque-content">
                <EmDesenvolvimento />
            </main>

        </div>
    )
}