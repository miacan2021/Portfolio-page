import { ThemeProvider } from "styled-components"
import { Button } from "../Button"
import { theme } from "../styles/Globals.styled"
import { HeroWrapper, HeroContainer, Hello, Name, FamilyName, Title, HeroTitle, Img, TopImg, TitleBorder } from "./Hero.styled"

export const Hero = () => {
    return (
        <ThemeProvider theme={theme}>
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
            <Button title={'GET IN TOUCH'} />
            </HeroContainer>
            </HeroWrapper>
        </ThemeProvider>
    )
}

