import './PixCard.css'

export default function PixCard({
    icon,
    titulo,
    descricao,
    textoBotao,
    onClick
}) {

    return (

        <div className="pix-card">

            <div className="pix-icon">
                {icon}
            </div>

            <h2>
                {titulo}
            </h2>

            <p>
                {descricao}
            </p>

            <button onClick={onClick}>
                {textoBotao}
            </button>

        </div>
    )
}