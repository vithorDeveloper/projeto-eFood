import styled from "styled-components";
import { cores } from "../../styleGlobal";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 298px;

  background-color: ${cores.corFundoHeader};

  margin-top: 120px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  ul {
    display: flex;
    gap: 8px;

    a{
      color: ${cores.corTextoOpacity};
    }
  }
`;

export const Copy = styled.p`
  text-align: center;

  font-size: .8rem;
  font-weight: 400;
  width: 480px;

  color: ${cores.corTextoOpacity};
`;
