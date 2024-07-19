import NavBar from "../../Components/navBar";
import Footer from '../../Components/footer';
import Inicio from '../../Components/inicio';
import LeyJustina from '../../Components/leyJustina'
import Funcionalidades from '../../Components/funcionalidades'
import ContactUs from "../../Components/contactUs";
 
function LandingPage() {
  return (
    <div>
      <NavBar />
      
        <Inicio />
        {/*<LeyJustina /> */}
        <Funcionalidades />
        <ContactUs />
      
      <Footer />
    </div>
  );
}

export default LandingPage;
