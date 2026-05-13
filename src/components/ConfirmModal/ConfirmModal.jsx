import './ConfirmModal.css'

export default function ConfirmModal({
    titulo,
    descricao,
    onConfirm,
    onClose,
    variant = 'primary'
}) {

    return (

        <div
            className="confirm-overlay"
            onClick={onClose}
        >

            <div
                className="confirm-modal"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <h2>{titulo}</h2>

                <p>{descricao}</p>

                <div className="confirm-actions">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        className={`confirm-btn ${variant}`}
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>

                </div>

            </div>

        </div>

    )
}