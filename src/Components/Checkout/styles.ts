import styled from "styled-components";
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

  &.address-is-open {
    display: flex;
  }

  h3 {
    font-size: 16px;
    color: ${cores.corTextoOpacity};
    margin-bottom: 16px;
    font-weight: 700;
  }

  .payment-button {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .has-error {
    border: 3px solid red;
    color: red;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.corTexto};
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    margin-bottom: 8px;

    font-weight: bold;
    color: black;
    
    border: 2px solid ${cores.corTextoOpacity};
    background-color: ${cores.corTexto};
  }

  &.mid-size {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 34px;

      input {
        width: 155px;
        margin-top: 8px;
      }
    }
  }
`;
