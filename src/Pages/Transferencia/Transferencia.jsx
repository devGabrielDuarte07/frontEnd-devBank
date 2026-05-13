import Sidebar from '@/components/Sidebar/Sidebar'
import EmDesenvolvimento from '@/components/EmDesenvolvimento/EmDesenvolvimento'

import './Transferencia.css'

export default function Transferencia() {

    return (

        <div className="transferencia-container">

            <Sidebar />

            <main className="transferencia-content">
                <EmDesenvolvimento />
            </main>

        </div>
    )
}