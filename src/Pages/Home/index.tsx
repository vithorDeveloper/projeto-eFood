import ClockSpinner from "../../Components/clipLoader";

import RestaurantList from "../../Components/RestaurantList";
import { Container } from "../../styleGlobal";
import { useGetRestaurantsQuery } from "../../services/api";
import { NavBar } from "../../Components/Navbar";
import { Section } from "./style";

export type restaurantsType = {
  id: number;
  titulo: string;
  destaque: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;

  cardapio: [
    {
      id: number;
      foto: string;
      preco: number;
      nome: string;
      descricao: string;
      porcao: string;
    }
  ];
};

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Container>
          <NavBar/>
            <Section>
              <hr />
              <RestaurantList restaurants={restaurants} />
            </Section>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <NavBar/>
          <Section>
            <ClockSpinner />
          </Section>
      </Container>
    </>
  );
};

export default Home;
