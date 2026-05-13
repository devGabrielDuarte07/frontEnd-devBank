import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from '@/pages/Login/Login'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Pix from '@/pages/Pix/Pix'
import Cadastro from '@/pages/Cadastro/Cadastro'
import Deposito from '@/pages/Deposito/Deposito'
import Extrato from '@/pages/Extrato/Extrato'
import Perfil from '@/pages/Perfil/Perfil'
import Saque from '@/pages/Saque/Saque'
import Transferencia from '@/pages/Transferencia/Transferencia'
import EsqueciSenha from '@/pages/EsqueciSenha/EsqueciSenha'

import PrivateRoute from './PrivateRoute'

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/login" />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/pix"
                    element={
                        <PrivateRoute>
                            <Pix />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/cadastro"
                    element={<Cadastro />}
                />

                <Route
                    path="/deposito"
                    element={
                        <PrivateRoute>
                            <Deposito />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/extrato"
                    element={
                        <PrivateRoute>
                            <Extrato />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/perfil"
                    element={
                        <PrivateRoute>
                            <Perfil />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/saque"
                    element={
                        <PrivateRoute>
                            <Saque />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/transferencia"
                    element={
                        <PrivateRoute>
                            <Transferencia />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/recuperar-senha"
                    element={<EsqueciSenha />}
                />
            </Routes>

        </BrowserRouter>
    )
}