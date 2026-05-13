import './ModalExcluirChave.css'

export default function ModalExcluirChave({
    chavePix,
    fechar
}) {

    return (

        <div className="modal-overlay">

            <div className="modal-confirm">

                <h2>
                    Excluir chave PIX
                </h2>

                <p>
                    Tem certeza que deseja excluir
                    esta chave?
                </p>

                <strong>
                    {chavePix?.chave}
                </strong>

                <div className="modal-actions">

                    <button
                        className="cancelar"
                        onClick={fechar}
                    >
                        Cancelar
                    </button>

                    <button
                        className="excluir"
                    >
                        Excluir
                    </button>

                </div>

            </div>

        </div>
    )
}