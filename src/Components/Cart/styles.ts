import styled from "styled-components";
import Lixeira from "../../assets/images/lixeira-icone.svg";
import { cores } from "../../styleGlobal";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;

  &.cart-is-open {
    display: flex;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;

  color: ${cores.corTexto};
  background-color: ${cores.corFundoHeader};

  width: 100%;
  height: 6rem;
  margin-bottom: 16px;
  gap: 8px;

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 1rem;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 70px;

    width: 1.5rem;
    height: 1.5rem;

    cursor: pointer;
    border: none;
    background-image: url(${Lixeira});
    background-color: transparent;
    background-repeat: no-repeat
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  width: 100%;
  height: 100%;

  background-color: #000;
`;

export const Aside = styled.aside`
  max-width: 360px;
  padding: 32px 8px;

  width: 100%;
  z-index: 1;

  background-color: ${cores.corFundo};
  
  .message-cart-div{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .message-cart {
    font-size: 16px;
    color: ${cores.corTextoOpacity};
    margin-bottom: 16px;
    font-weight: 700;
  }
`;

export const Preco = styled.h3`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;

  color: ${cores.corTexto};
`;

export const Button = styled.button`
  width: 100%;

  font-size: 14px;
  font-weight: 700;

  padding: 1rem;

  background-color: ${cores.hoverTexto};
  color: ${cores.corFundoHeader};

  border: none;
  cursor: pointer;
`;
