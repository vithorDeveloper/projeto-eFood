import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../styleGlobal";

type Props = {
  destaque?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 472px;
  height: 398px;
  font-weight: 700;

  color: ${cores.corTextoOpacity};
  background-color: ${cores.corFundoHeader};`;

export const Imagem = styled.img`
  height: 217px;
  object-fit: cover;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;

  h2 {
    font-size: 18px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 18px;

    gap: 8px;
  }
`;

export const Info = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const Button = styled(Link)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 14px;
  width: 82px;
  height: 24px;
  margin-left: 8px;
  margin-top: 8px;

  color: ${cores.corFundoHeader};
  background-color: ${cores.hoverTexto};

  transition: all 0.2s;

cursor: pointer;

&:hover {
  background-color: transparent;
  color: ${cores.corTextoOpacity}
}
`;

export const TagContainer = styled.div<Props>`
  display: flex;
  position: absolute;

  top: 16px;
  left: ${(props) => (props.destaque ? "230px" : "380px")};
  gap: 8px;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;

  width: auto;
  height: 14px;
  padding: 12px;

  font-weight: 700;
  font-size: 12px;

  color: black;
  background-color: ${cores.corTextoOpacity};
`;
