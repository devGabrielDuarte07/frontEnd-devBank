import Sidebar from '@/components/Sidebar/Sidebar'
import EmDesenvolvimento from '@/components/EmDesenvolvimento/EmDesenvolvimento'

import './Perfil.css'

export default function Perfil() {

    return (

        <div className="perfil-container">

            <Sidebar />

            <main className="perfil-content">
                <EmDesenvolvimento />
            </main>

        </div>
    )
}