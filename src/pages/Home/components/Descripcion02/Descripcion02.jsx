import './Descripcion02.scss';
import BaseTeorica from '../../../../assets/00-Home/01-07-imagen-teoria.png';
import Practicas from '../../../../assets/00-Home/01-07-imagen-practicas.png';
import Registros from '../../../../assets/00-Home/01-07-imagen registros.png';

const Descripcion02 = () => {
        
    return (
        <div className='descipcion02_container'>
            
            <div>
                <img src={BaseTeorica} alt="Imagen de teoria" />
                <p>
                    <span>
                        BASE TEÓRICA <br />
                    </span>
                    Este libro, fruto de años de estio y sobre todo de prácticas cardiológicas,
                    pretende introducir al lector a una aproximación a la electrocardiografía
                    a partir de ciertos conocimientos teóricos que darán acceso a deducciones
                    más complejas si pretende convertirse en un experto.
                    Los capítulos que lo componen siguen un orden pedagógico en la integración
                    de conceptos, pero en última instancia, adquirir los conocimientos teóricos
                    es relativamente sencillo.
                </p>
            </div>

            <div>
                <p>
                    <span>
                        PRÁCTICAS <br />
                    </span>
                    El gran desafío es entrenarse en la práctica de la interpretacíon en conjunción
                    con la teoría aprendida, sin que este se diluya por falta de ejercitación.
                    Es, en este aspecto, en el que está puesto el foco del aprendizaje, porque este
                    manual cuenta con más de mil doscientos registros electrocardiográficos entre
                    ejemplos y ejercicios interactivos a través de los cuales el estudiante podrá
                    ejercitarse con un nivel de complejidad progresivo.
                </p>
                <img src={Practicas} alt="Imagen de teoria" />
            </div>

            <div>
                <img src={Registros} alt="Imagen de teoria" />
                <p>
                    <span>
                        REGISTROS <br />
                    </span>
                    En cada ejercicio el usuario tendrá la opción de autoevaluarse y
                    permitir así un mejor seguimiento de sus actividades en la sección
                    de usuario. También podrá filtrar la búsqueda de ejercicios y revisar
                    sólo los que le interesan
                </p>
            </div>

        </div>
    )

}
export default Descripcion02