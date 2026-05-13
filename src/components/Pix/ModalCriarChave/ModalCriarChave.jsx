import './ModalCriarChave.css'

export default function ModalCriarChave({
    fechar
}) {

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Criar chave PIX</h2>

                <select>

                    <option value="EMAIL">
                        Email
                    </option>

                    <option value="CPF">
                        CPF
                    </option>

                    <option value="TELEFONE">
                        Telefone
                    </option>

                </select>

                <input
                    placeholder="Digite a chave"
                />

                <div className="modal-actions">

                    <button
                        className="cancelar"
                        onClick={fechar}
                    >
                        Cancelar
                    </button>

                    <button>
                        Criar chave
                    </button>

                </div>

            </div>

        </div>
    )
}