import Sidebar from '@/components/Sidebar/Sidebar'
import EmDesenvolvimento from '@/components/EmDesenvolvimento/EmDesenvolvimento'

import './Extrato.css'

export default function Extrato() {

    return (

        <div className="extrato-container">

            <Sidebar />

            <main className="extrato-content">
                <EmDesenvolvimento />
            </main>

        </div>
    )
}