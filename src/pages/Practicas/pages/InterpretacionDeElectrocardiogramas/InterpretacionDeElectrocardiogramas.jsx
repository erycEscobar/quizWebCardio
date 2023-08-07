import './InterpretacionDeElectrocardiogramas.scss';
import PracticasNavBar from '../../components/PracticasNavBar/PracticasNavBar';
import Filtros from '../../components/Filtros/Filtros';
import SelectedFilters from '../../components/SelectedFilters/SelectedFilters';
import TitleSection from '../../components/TitleSection/TitleSection';
import UserAutoEvaluationButtons from '../../components/UserAutoEvaluationButtons/UserAutoEvaluationButtons';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import ExerciseView from '../../components/ExerciseView/ExerciseView';
import Icon from '../../../../assets/02-Practicas/02-03-interpretacion.png';
import { ExerciseContextProvider  } from '../../exerciseContext/exerciseContext';
import ExercisesNavigation from '../../components/ExercisesNavigation/ExercisesNavigation';


const InterpretacionDeElectrocardiogramas = () => {

    return (
        <div className='userView_container'>
            <PracticasNavBar />
            <ExerciseContextProvider>
                <Filtros levelFilter={true}/>
                <section className='mainView_container'>
                    <div className='headerContent_container'>
                        <SelectedFilters />
                        <TitleSection icon={Icon} title='INTERPRETACION DE ELECTROCARDIOGRAMAS' />
                        <UserAutoEvaluationButtons />
                        <ExercisesNavigation />
                    </div>
                    <div className='mainContent_container'>
                        <ExerciseList />
                        <ExerciseView />
                    </div>
                </section>
            </ExerciseContextProvider>
        </div>
    )
    
}

export default InterpretacionDeElectrocardiogramas