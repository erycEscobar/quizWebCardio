import { useState } from 'react';
import './FiltrosOptions.scss';

const FiltrosOptions = ({title, actionButtons, handlerFunction }) => {

    const [ description, setDescription ] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDescription(false);
        } else {
            setDescription(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDescription(false);
        } else {
            setDescription(false);
        }
    };

    return ( 
        <>
            {title && <li>{title}</li>}
            {actionButtons.map((actionButton, index) => {
                return (
                    <li key={index} >
                        <img 
                            src={actionButton.icon} 
                            alt="" 
                            onClick={() => handlerFunction(actionButton.filterType)}
                            onMouseEnter={onMouseEnter} 
                            onMouseLeave={onMouseLeave}
                        />
                        {description &&
                            <p className='description'>
                                {actionButton.description}
                            </p>
                        }
                    </li>
                )
            })}
        </>
    )
}
export default FiltrosOptions