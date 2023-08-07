import { Link } from 'react-router-dom';
import './PracticasOptionsMenu.scss';

const PracticasOptionsMenu = ({ options }) => {

    return (
        <>
        {options.map((option) => {
            return (
                <li key={option.id}>
                    <Link to={option.link}>
                        <img src={option.icon} alt={option.alt} />
                        <p>
                            {option.label}
                        </p>
                    </Link>
                </li>
            )
        })}
        </>
    )
    
}
export default PracticasOptionsMenu