import './Descripcion01.scss';
import Medica from '../../../../assets/00-Home/Medica.png'
import Comillas from '../../../../assets/00-Home/01-05-comillas.png'

const Descripcion01 = () => {

  return (
    <div className='descripcion01_container'>
        <div>
            <img src={Comillas} alt="Icono de comillas" />
            <p>
                Encontrarás una sólida base teórica y
                más de mil doscientos ejercicios prácticos
                para que te inicies o refuerces tus conocimientos
                en la interpretación de electrocardiogramas
            </p>

        </div>
        <img src={Medica} alt="Personal de medicina" />
    </div>
  )

}
export default Descripcion01