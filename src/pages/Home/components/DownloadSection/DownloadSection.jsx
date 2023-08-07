import './DownloadSection.scss';
import DownloadButton from '../../../../assets/00-Home/01-09-boton-app.png'

const DownloadSection = () => {

    return (
        <div className='downloadSection_container'>
            <span>
                DESCARGA LA APP
            </span>
            <img src={DownloadButton} alt="Boton para descargar la app" />
        </div>
    )

}
export default DownloadSection