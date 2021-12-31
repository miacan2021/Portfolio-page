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
  }
