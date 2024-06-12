import styled from 'styled-components'
import { cores } from '../../styleGlobal'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  width: 1024px;

  margin: 1.5rem auto 0;

  position: relative;

  .logoSite{
    background-color: ${cores.corFundoHeader};
    
    border-radius: .8rem .8rem 0 0;

    img{
      margin: 1.5rem 1.25rem;
    }
  }

  .branding{
    position: absolute;
    left: 8rem;
    top: 1rem;

    h1{
      padding-bottom: .3rem;
    }
  }
`
