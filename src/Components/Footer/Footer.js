
import logoInstagram from "./assets/logoInstagram.png";
import logoFacebook from "./assets/logoFacebook.png";
const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="tituloFooter">
        <h4 className="nameFooter">
          KIIKII
          <h5 className="h5eslogan">
            La mejor ropa con los mejores diseñadores.
          </h5>
        </h4>
        <div className="social">
          <h4 className="h4Redes">SOCIAL</h4>
          <a className="instagramFooter"> <img src={logoInstagram}></img> </a>
          <a className="facebookFooter"> <img src={logoFacebook}></img> </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
