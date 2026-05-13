import Sidebar from '@/components/Sidebar/Sidebar'
import EmDesenvolvimento from '@/components/EmDesenvolvimento/EmDesenvolvimento'

import './Deposito.css'

export default function Deposito() {

    return (

        <div className="deposito-container">

            <Sidebar />

            <main className="deposito-content">
                <EmDesenvolvimento />
            </main>

        </div>
    )
}