import { Link } from "react-router-dom";

import logo from "../../assets/images/Logo.svg";

import {Container} from "./styles";

const Header = () => {

  return (
    <Container>
    <Link to="/" className="logoSite">
      <img src={logo} alt="logo do site" />
    </Link>

    <div className="branding">
      <h1>eFood</h1>
      <p>Viva experiências gastronômicas no conforto da sua casa !</p>
    </div>
  </Container>
  );
};

export default Header;
