import {Button,ContainerPrato} from "./styles";

type Props = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
  onclick: () => void;
};

const Plates = ({ foto, nome, descricao, onclick }: Props) => {
  const retornaDescricaoPrato = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 120) + "...";
    }
  };

  return (
    <>
      <ContainerPrato>
        <img src={foto} alt={nome} />
        <h2>{nome}</h2>
        <p>{retornaDescricaoPrato(descricao)}</p>
        <Button onClick={onclick}>Ver detalhes</Button>
      </ContainerPrato>
    </>
  );
};

export default Plates;
