import api from './api'

export async function buscarTransacoes() {

    const response =
        await api.get('/Conta/extrato')

    return response.data.dados
}