import { useState } from "react";

import Modal from "../Modal";
import Plate from "../Plate";

import { PlatesListContainer } from "./styles";
import { Container } from "../../styleGlobal";
import { RootReducer } from "../../store";
import { openCart } from "../../store/reducers/cart";

import { useDispatch, useSelector } from "react-redux";

type Props = {
  plates: [
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

export interface modalType {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
  visivel: boolean;
}

type plateProps = {
  descricao: string;
  foto: string;
  id: number;
  nome: string;
  porcao: string;
  preco: number;
};

const PlatesList = ({ plates }: Props) => {
  const [modal, setModal] = useState<modalType>({
    id: 0,
    descricao: "",
    foto: "",
    nome: "",
    porcao: "",
    preco: 0,
    visivel: false,
  });

  const [plate, setPlate] = useState<plateProps>({
    descricao: "",
    foto: "",
    id: 0,
    nome: "",
    porcao: "",
    preco: 0,
  });

  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const abrirCarrinho = () => {
  dispatch(openCart());
  }

  return (
    <Container>
      <PlatesListContainer className="container">
        {plates.map((plate) => (
          <Plate
          key={plate.id}
          id={plate.id}
          descricao={plate.descricao}
          foto={plate.foto}
          nome={plate.nome}
          porcao={plate.porcao}
          preco={plate.preco}
          onclick={() => {
            setModal({
                id: plate.id,
                descricao: plate.descricao,
                foto: plate.foto,
                nome: plate.nome,
                porcao: plate.porcao,
                preco: plate.preco,
                visivel: true,
              });
              setPlate(plate);
            }}
            />
          ))}
          <p className="Cart" onClick={abrirCarrinho}>{items.length} produto(s) no carrinho</p>
      </PlatesListContainer>
      <Modal
        id={modal.id}
        descricao={modal.descricao}
        foto={modal.foto}
        nome={modal.nome}
        porcao={modal.porcao}
        preco={modal.preco}
        key={modal.id}
        visivel={modal.visivel}
        setModal={setModal}
        plate={{
          descricao: plate.descricao,
          foto: plate.foto,
          id: plate.id,
          nome: plate.nome,
          porcao: plate.porcao,
          preco: plate.preco,
        }}
      />
    </ Container>
  );
};

export default PlatesList;
