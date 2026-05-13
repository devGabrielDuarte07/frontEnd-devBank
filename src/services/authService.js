import api from './api'

export async function login(email, senha) {

    const response = await api.post('/Login', { email, senha })

    console.log('Resposta da API:', response)
    return response.data.dados
}

