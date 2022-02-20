import { createGlobalStyle } from 'styled-components'

export const GrobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        font-size: 12px;
        font-family: 'Abel', sans-serif;
    }
    
    #root{
        margin:0 auto;
    }
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`
export const theme = {
    palette: {
      white: '#fffffe',
      beige: '#faeee7',
      pink: '#ff8ba7',
      light_pink: '#ffc6c7',
      green: '#c3f0ca',
      head_text: '#33272a',
      sub_text: '#594a4e'
      },
      
    mobile : "768px",
    tablet: "767px"
  }

  export const darkTheme = {
    palette: {
      white: '#fffffe',
      beige: '#232946',
      pink: '#eebbc3',
      light_pink: '#d4939d',
      green: '#b8c1ec',
      head_text: '#fffffe',
      sub_text: '#232946'
      },
    mobile : "768px",
    tablet: "767px"
  }

