import { Button } from "../pattern/Button"
import { HeroWrapper, HeroContainer, Hello, Name, FamilyName, Title, HeroTitle, Img, TopImg, TitleBorder } from "./Hero.styled"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Hero = () => {

    return (
            <>
            <HeroWrapper>
            <HeroContainer >
                <HeroTitle>
                <Hello as={motion.h1} initial={{ opacity: 0,  x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} 
                transition={{delay: 1}}>
                    HELLO. I'M</Hello>
                <Name as={motion.h1} initial={{ opacity: 0,  x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} 
                transition={{delay: 0.5}}>SHIHO</Name>
                <FamilyName
                as={motion.h1} initial={{ opacity: 0,  x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} 
                transition={{delay: 0.5}}>KAZAMA</FamilyName>
                <Title as={motion.h1} initial={{ opacity: 0,  x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} 
                transition={{delay: 1}}>CREATIVE <TitleBorder>FRONT-END</TitleBorder> DEVELOPER <br /> BASED IN VANCOUVER</Title>
                <Img as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                transition={{delay: 1.5}}>
                <Link to='/about'><TopImg as={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /></Link>
                </Img>
                </HeroTitle>
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                transition={{delay: 2}} href="#contact"><Button title={'GET IN TOUCH'} /></motion.a>
            </HeroContainer>
            </HeroWrapper>
            </>
    )
}

