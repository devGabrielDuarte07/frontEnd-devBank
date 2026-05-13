import api from './api'

export async function listarChaves() {

    const response = await api.get('/pix')

    return response.data
}

export async function criarChave(dados) {

    const response = await api.post(
        '/pix',
        dados
    )

    return response.data
}

export async function enviarPix(dados) {

    const response = await api.post(
        '/pix/enviar',
        dados
    )

    return response.data
}