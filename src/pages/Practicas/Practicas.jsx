import './Practicas.scss';
import { PracticasOptions } from './PracticasOptions';
import PracticasOptionsMenu from './components/PracticasOptionsMenu/PracticasOptionsMenu';
const Practicas = () => {

    return (
      <div className='practicas_container'>
        <div>
          <ul className='practicas_navigation'>
            <PracticasOptionsMenu options={PracticasOptions} />
          </ul>
        </div>
      </div>
    )
    
}
export default Practicas