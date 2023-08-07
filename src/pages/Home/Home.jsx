import AccesosRapidos from "./components/AccesosRapidos/AccesosRapidos"
import Descripcion01 from "./components/Descripcion01/Descripcion01"
import Descripcion02 from "./components/Descripcion02/Descripcion02"
import Descripcion03 from "./components/Descripcion03/Descripcion03"
import DownloadSection from "./components/DownloadSection/DownloadSection"


import HeroSection from "./components/HeroSection/HeroSection"



const Home = () => {
  return (
    <>
      <HeroSection />
      <Descripcion01 />
      <AccesosRapidos />
      <Descripcion02 />
      <Descripcion03 />
      <DownloadSection />
    </>
  )
}
export default Home