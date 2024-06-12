import styled from "styled-components";
import { cores } from "../../styleGlobal";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  color: ${cores.corTextoOpacity};
  background-color: ${cores.corTexto};
  z-index: 0;

  width: 1024px;
  height: 344px;
  z-index: 1;

  button {
    border: none;
    .Icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      color: ${cores.hoverTexto};
    }
  }

  img {
    width: 25rem;
    height: 100%;
    object-fit: cover;

    margin-right: 3rem
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 16px;
    }

    p {
      padding-right: 2rem;
      font-size: 14px;
    }

    button {
      width: 218px;
      margin-top: 20px;
    }
  }

  background-color: ${cores.corFundoHeader};
`;
