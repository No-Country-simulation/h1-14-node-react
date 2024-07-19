import NavBar from "../../Components/navBar";
import Footer from '../../Components/footer';
import Inicio from '../../Components/inicio';
import LeyJustina from '../../Components/leyJustina'
import Funcionalidades from '../../Components/funcionalidades'
import ContactUs from "../../Components/contactUs";
import Aliados from "../../Components/aliados";
 
function LandingPage() {
  return (
    <div>
      <NavBar />
      
        <Inicio />
        <Aliados />
        <LeyJustina /> 
        <Funcionalidades />
        <ContactUs />
      
      <Footer />
    </div>
  );
}

export default LandingPage;
