import { useContext } from "react"
import { ModeContext } from "../../..";
import { ThemeProvider } from "styled-components"
import { Button } from "../pattern/Button"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { HeroWrapper, HeroContainer, Hello, Name, FamilyName, Title, HeroTitle, Img, TopImg, TitleBorder } from "./Hero.styled"

export const Hero = () => {
    const mode = useContext(ModeContext)

    return (
        <>
            <ThemeProvider theme={ mode === 'light' ? theme : darkTheme}>
             <HeroWrapper>
            <HeroContainer>
                <HeroTitle>
                <Hello>HELLO. I’M</Hello>
                <Name>SHIHO</Name>
                <FamilyName>KAZAMA</FamilyName>
                <Title>CREATIVE <TitleBorder>FRONT-END</TitleBorder> DEVELOPER <br /> BASED IN VANCOUVER</Title>
                <Img>
                <TopImg src='../img/photo.jpg' alt="profile-image" />
                </Img>
                </HeroTitle>
            <a href="#contact"><Button title={'GET IN TOUCH'} /></a>
            </HeroContainer>
            </HeroWrapper>
        </ThemeProvider>
        </>
    )
}

