import { createGlobalStyle } from 'styled-components'

export const GrobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    #root{
        margin:0 auto;
    }

    a {
        text-decoration: none;
    }
`