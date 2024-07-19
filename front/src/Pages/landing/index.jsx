import NavBar from "../../Components/navBar";
import Footer from '../../Components/footer';
import Inicio from '../../Components/inicio';
import LeyJustina from '../../Components/leyJustina'
import Funcionalidades from '../../Components/funcionalidades'
 
function LandingPage() {
  return (
    <div>
      <NavBar />
      
        <Inicio />
        {/*<LeyJustina /> */}
        <Funcionalidades />
      
      
      <Footer />
    </div>
  );
}

export default LandingPage;
