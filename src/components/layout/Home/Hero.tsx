import { Button } from "../pattern/Button"
import { HeroWrapper, HeroContainer, Hello, Name, FamilyName, Title, HeroTitle, Img, TopImg, TitleBorder } from "./Hero.styled"

export const Hero = () => {
    return (
            <>
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
            </>
    )
}

