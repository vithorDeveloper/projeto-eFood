import { ClipLoader  } from "react-spinners";
import { Container } from "./styles";
import { cores } from "../../styleGlobal";

const clipLoader = () => {
  return (
    <Container>
      <ClipLoader color={cores.hoverTexto} />
    </Container>
  );
};

export default clipLoader;
