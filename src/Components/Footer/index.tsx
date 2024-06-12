import logo from "../../assets/images/Logo.svg";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

import {Container,Copy,Div} from "./styles";
const Footer = () => (
  <Container>
    <Div>
      <img src={logo} alt="Efood Logo" />

      <ul>
        <li>
          <a href="#">
            <InstagramLogo size={30}/>
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookLogo size={30}/>
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterLogo size={30}/>
          </a>
        </li>
      </ul>
    </Div>

    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Copy>
  </Container>
);

export default Footer;
