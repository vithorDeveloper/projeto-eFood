import styled from 'styled-components'
import { cores } from '../../styleGlobal'

export const ContainerNavbar = styled.nav`
  border-radius: 0 0 .8rem .8rem;

  background-color: ${cores.corFundoHeader};
`

export const Lista = styled.ul`
  text-align: center;

  padding-top: 4rem;

  li {
    padding-bottom: 4rem;
    
    a {
        color: ${cores.hoverTexto};
  
        cursor: pointer;
  
        transition: all 0.2s;
  
        &:hover {
          color: ${cores.corTextoOpacity};
        }
    }
  }
`
