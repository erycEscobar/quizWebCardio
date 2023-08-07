import ECGlogo from '../../../../assets/00-Home/01-02-Logo botonera.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="./Home" >
      <img src={ECGlogo} alt="ecg estudio logo" />
    </Link>
  )
}
export default Logo
