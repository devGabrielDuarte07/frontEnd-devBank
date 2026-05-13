import api from './api'

export async function buscarUsuario() 
{
    const response = await api.get('/Conta')
    return response.data.dados
}

