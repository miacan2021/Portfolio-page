import { GrobalStyles } from "../styles/Globals.styled"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../styles/Globals.styled"
import { useSetTheme } from "../../hooks/useSetTheme";
import { Link } from 'react-router-dom'
import styled from "styled-components";

export const ErrWrapper = styled.div`
  background: ${({theme}) => theme.palette.beige};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrImg = styled.img`
  width: 300px;
  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 200px;
       }
`

export const ErrMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

export const ErrBack = styled.div`
  width: 70px;
  height: 30px;
  background-color: ${({theme}) => theme.palette.white};
  color: ${({theme}) => theme.palette.sub_text};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({theme}) => `2px 2px ${theme.palette.pink}`};;
`

export const Error = () => {
  const { modeTheme } = useSetTheme()

  return (
    <>
    <GrobalStyles />
    <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
      <ErrWrapper>
      <ErrImg src="img/err.png" alt="err" />
      <ErrMessage>
      <h1>SORRY!</h1>
      <h2>Something wrong... Please go back to top page.</h2>
      <Link to='/'><ErrBack>BACK</ErrBack></Link>
      </ErrMessage>
      </ErrWrapper>
    </ThemeProvider>
    </>
  )
};
