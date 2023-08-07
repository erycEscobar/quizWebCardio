import './Filtros.scss';

import FiltrosOptions from './components/FiltrosOptions/FiltrosOptions';
import useFilterHandler from './components/FilterHandlers/FilterHandlers';
import { realizacionButtons, nivelesButtons, favButton, autoEvButtons } from './ButtonIcons';

const Filtros = ({ levelFilter }) => {

    const { 
        CompletedFilterHandler, 
        LevelFilterHandler,
        SavedFilterHandler,
        ResolutionFilterHandler,
    } = useFilterHandler();

    return (
        <div className='filtros_container'>
            <div>
                FILTROS
                <ul>
                    <FiltrosOptions title={false} actionButtons={realizacionButtons} handlerFunction={CompletedFilterHandler}/>
                    {levelFilter && <FiltrosOptions title={'NIVEL DE COMPLEJIDAD'} actionButtons={nivelesButtons} handlerFunction={LevelFilterHandler}/>}
                    <FiltrosOptions title={'AUTOEVALUADOS'} actionButtons={favButton} handlerFunction={SavedFilterHandler}/>
                    <FiltrosOptions title={false} actionButtons={autoEvButtons} handlerFunction={ResolutionFilterHandler}/>
                </ul>
            </div>
        </div>
    )

}
export default Filtros