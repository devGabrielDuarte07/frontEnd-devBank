import api from './api'

export async function buscarUsuario() 
{
    const response = await api.get('/Conta')
    return response.data.dados
}

export async function criarUsuario(dados)
{
    const response = await api.post('/Usuario', dados)
    return response.data
}
