import { useExerciseContext } from '../../exerciseContext/exerciseContext';
import './SelectedFilters.scss';

const SelectedFilters = () => {

  const {
    completedFilter,
    levelFilter,
    savedFilter,
    resolutionFilter,
  } = useExerciseContext();

  return (
    <div className='selectedFilters_container'>
      <ul>
        {  
          completedFilter === true ? <li>REALIZADOS</li> :
          completedFilter === false ? <li>SIN REALIZAR</li> : 
          <li>TODOS</li>  
        }
        {
          levelFilter !== null && <li>NIVEL {levelFilter}</li>
        }
        {
          savedFilter === true && <li>DESTACADOS</li>
        }
        {
          resolutionFilter !== null && (
            resolutionFilter === true ? <li>BIEN RESUELTOS</li> :
            <li>MAL RESUELTO</li> 
          )
        }
      </ul>
    </div>
  )
}
export default SelectedFilters