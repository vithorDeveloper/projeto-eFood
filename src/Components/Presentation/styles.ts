import styled from "styled-components";
import { cores } from "../../styleGlobal";

type Props = {
  imagem: string;
};

export const Banner = styled.div<Props>`
  position: relative;
  width: 1024px;
  height: 17rem;

  border: 8px solid ${cores.corFundoHeader};
  
  margin: 0 auto 4rem auto;

  background-image: url(${(props) => props.imagem});
  background-size: cover;

  z-index: -2;

  &::after{
      content: "";

      background-color: rgba(0, 0, 0, 0.7);

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      z-index: -1;
    }


  div {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;

    height: 100%;

    padding: 0 1rem;
  }

  span {
    font-weight: 100;
    margin-top: 24px;
    font-size: 32px;
  }

  h1 {
    margin-bottom: 32px;
    font-size: 32px;
  }
`;
