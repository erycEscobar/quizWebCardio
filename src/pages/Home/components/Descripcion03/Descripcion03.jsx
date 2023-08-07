import './Descripcion03.scss';
import Comillas from '../../../../assets/00-Home/01-05-comillas.png'

const Descripcion03 = () => {

    return (
        <div className='descripcion03_container'>
            <div>
                <img src={Comillas} alt="Icono de comillas"/>
                <p>
                    Actualmente, el aporte de la electrocardiografia
                    sigue siendo extraordinariamente útil en el diagnóstico
                    de las arritmias y de los trastornos de conducción, así como
                    suele brindar información relevante en muchas otras patologías
                    cardñiacas como la cardiopatía isquémica, y en ocasiones,
                    información sutil sobre patologías estructurales o electroquímicas.    
                </p>
            </div>
        </div>
    )

}

export default Descripcion03