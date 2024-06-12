import { Banner } from "./styles";

type Props = {
  categoria: string;
  nome: string;
  imagem: string;
};

const Presentation = ({ categoria, nome, imagem }: Props) => (
  <Banner imagem={imagem}>
    <div className="container">
      <span>{categoria}</span>
      <h1>{nome}</h1>
    </div>
  </Banner>
);

export default Presentation;
