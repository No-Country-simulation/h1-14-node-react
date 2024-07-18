import NavBar from "../../Components/navBar";
import Footer from '../../Components/footer';
import Inicio from '../../Components/inicio';
import LeyJustina from '../../Components/leyJustina'
 
function LandingPage() {
  return (
    <div>
      <NavBar />
      <main>
        <Inicio />
        <LeyJustina />
      </main>
      <Footer />
      
    </div>
  );
}

export default LandingPage;
