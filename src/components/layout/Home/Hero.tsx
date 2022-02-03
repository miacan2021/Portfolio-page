import { Button } from "../pattern/Button"
import { HeroWrapper, HeroContainer, Hello, Name, FamilyName, Title, HeroTitle, Img, TopImg, TitleBorder } from "./Hero.styled"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
                <Link to='/about'><TopImg as={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /></Link>
                </Img>
                </HeroTitle>
            <a href="#contact"><Button title={'GET IN TOUCH'} /></a>
            </HeroContainer>
            </HeroWrapper>
            </>
    )
}

