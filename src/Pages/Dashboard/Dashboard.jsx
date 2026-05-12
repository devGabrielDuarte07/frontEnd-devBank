import './Dashboard.css'

import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'
import BalanceCard from '@/components/BalanceCard/BalanceCard'
import ActionsCard from '@/components/ActionsCard/ActionsCard'
import Statement from '@/components/Statement/Statement'

export default function Dashboard() {
    return (
        <div className="dashboard-container">

            <Sidebar />

            <main className="main-content">

                <Navbar />

                <section className="top-area">
                    <BalanceCard />
                    <ActionsCard />
                </section>

                <Statement />

            </main>

        </div>
    )
}