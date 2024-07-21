import NavBar from "../../Components/navBar";
import Footer from '../../Components/footer';
import Inicio from '../../Components/inicio';
import LeyJustina from '../../Components/leyJustina';
import Funcionalidades from '../../Components/funcionalidades';
import ContactUs from "../../Components/contactUs";
import Aliados from "../../Components/aliados";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <section id="inicio">
        <Inicio />
      </section>
      <section id="aliados">
        <Aliados />
      </section>
      <section id="leyJustina">
        <LeyJustina />
      </section>
      <section id="funcionalidades">
        <Funcionalidades />
      </section>
      <section id="contactUs">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;