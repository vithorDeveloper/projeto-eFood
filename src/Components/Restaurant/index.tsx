import { Container,Button,Imagem,Info,Tag,TagContainer,Title } from "./styles";

import { Star } from "@phosphor-icons/react";

type Props = {
  id: number;
  imagem: string;
  nome: string;
  nota: number;
  info: string;
  destaque: boolean;
  categoria: string;
};

const Restaurant = ({
  destaque,
  categoria,
  nome,
  imagem,
  nota,
  info,
  id,
}: Props) => {
  const retornaInfoRestaurante = (info: string) => {
    if (info.length > 183) {
      return info.slice(0, 180) + "...";
    }

    return info;
  };

  return (
    <Container>
      <Imagem src={imagem} alt={nome} />
      <Title>
        <h2>{nome}</h2>
        <span>
          {nota}
          <Star/>
        </span>
      </Title>
      <Info>{retornaInfoRestaurante(info)}</Info>
      <Button to={`/restaurant/${id}`}>Saiba mais</Button>

      <TagContainer destaque={destaque}>
        {destaque ? <Tag>Destaque da semana</Tag> : ""}
        <Tag>{categoria}</Tag>
      </TagContainer>
    </Container>
  );
};

export default Restaurant;
