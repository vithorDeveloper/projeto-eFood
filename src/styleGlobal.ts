import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    corFundo: '#393C49',
    corFundoHeader: '#1F1D2B',
    hoverTexto: '#EA7C69',
    corTexto: '#E0E6E9',
    corTextoOpacity: '#ABBBC2'

}


export const GlobalCSS = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        font-family: "Barlow", sans-serif;

        background-color: ${cores.corFundo};
        color: ${cores.corTexto};

        padding: 0 .5rem;
        
        h1, h2, h3{
        color: ${cores.corTexto};
        letter-spacing: .1rem;
        }

        p, span, a {
        letter-spacing: .03rem;
        }

        button{
        background-color: ${cores.hoverTexto};
        color: ${cores.corFundo};

        font-family: "Quicksand", sans-serif;
        }
    }
`
export const Container = styled.main`
  width: 1024px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 6rem auto;
`



