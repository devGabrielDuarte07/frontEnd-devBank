import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from '../Pages/Login/Login'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Pix from '../Pages/Pix/Pix'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Deposito from '../Pages/Deposito/Deposito'
import Extrato from '../Pages/Extrato/Extrato'
import Perfil from '../Pages/Perfil/Perfil'
import Saque from '../Pages/Saque/Saque'
import Transferencia from '../Pages/Transferencia/Transferencia'
import EsqueciSenha from '../Pages/EsqueciSenha/EsqueciSenha'
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