import api from './api'

export async function depositar(valor) {

    const response =
        await api.post(
            '/Conta/deposito',
            {
                valor
            }
        )

    return response.data
}

export async function sacar(valor) {

    const response =
        await api.post(
            '/Conta/saque',
            {
                valor
            }
        )
    return response.data
}

export async function transferir(cpfContaDestino, valor) {

    const response = await api.post(
        '/Conta/transferencia',
        {
            cpfContaDestino,
            valor
        }
    )
    return response.data
}

export async function pix(chave, valor) {

    const response = await api.post(
        '/Pix/enviar',
        {
            chave,
            valor
        }
    )
    return response.data
}