import './SuscripcionCard.scss';

const SuscripcionCard = ({ title, price }) => {

    return (
        <li className='suscripcion_card'>
            <p className='card_tittle'>
                {title}
            </p>
            <p className='card_price'>
                ${price}
            </p>
            <p className='card_button'>
                SUSCRIBIRSE
            </p>
        </li>
    )

}
export default SuscripcionCard