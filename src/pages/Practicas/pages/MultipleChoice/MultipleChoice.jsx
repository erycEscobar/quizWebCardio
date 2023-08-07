import './MultipleChoice.scss';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import ExerciseView from '../../components/ExerciseView/ExerciseView';
import Filtros from '../../components/Filtros/Filtros';
import PracticasNavBar from '../../components/PracticasNavBar/PracticasNavBar';
import SelectedFilters from '../../components/SelectedFilters/SelectedFilters';
import TitleSection from '../../components/TitleSection/TitleSection';
import UserAutoEvaluationButtons from '../../components/UserAutoEvaluationButtons/UserAutoEvaluationButtons';
import { ExerciseContextProvider  } from '../../exerciseContext/exerciseContext';
import Icon from '../../../../assets/02-Practicas/02-03-multiple choice.png';
import ExercisesNavigation from '../../components/ExercisesNavigation/ExercisesNavigation';

const MultipleChoice = () => {

    return (
        <div className='userView_container'>
            <PracticasNavBar />
            <ExerciseContextProvider>
                <Filtros levelFilter={false} />
                <section className='mainView_container'>
                    <div className='headerContent_container'>
                        <SelectedFilters />
                        <TitleSection icon={Icon} title='MÚLTIPLE CHOICE'/>
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
export default MultipleChoice