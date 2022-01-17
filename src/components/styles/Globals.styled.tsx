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
/* font-family: 'Abel', sans-serif;
font-family: 'Josefin Slab', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif; */
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
      beige: '#d4d8f0',
      pink: '#eebbc3',
      light_pink: '#d4939d',
      green: '#121629',
      head_text: '#232946',
      sub_text: '#232946'
      },
      
    mobile : "768px",
    tablet: "767px"
  }

