import styled from "styled-components";
import {  cores } from "../../styleGlobal";

export const ContainerPrato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 8px;
  width: 320px;

  background-color: ${cores.corFundoHeader};

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
    padding: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${cores.corTextoOpacity};

    padding: 0 0.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;

  font-weight: 900;
  font-size: 14px;

  padding: 1rem 0;

  transition: all 0.2s;

  width: 100%;

&:hover {
  background-color: transparent;
  color: ${cores.corTextoOpacity};
}

  /* color: ${cores}; */
  /* background-color: ${cores}; */
`;

