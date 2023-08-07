import './PracticasNavBar.scss';
import PracticasOptionsMenu from '../PracticasOptionsMenu/PracticasOptionsMenu'
import { PracticasOptions } from '../../PracticasOptions';


const PracticasNavBar = () => {

    return (
        <div className='practicasNavBar_container'>
            <div>
                <ul>
                    <PracticasOptionsMenu options={PracticasOptions}/>
                </ul>
            </div>
        </div>
    )

}
export default PracticasNavBar