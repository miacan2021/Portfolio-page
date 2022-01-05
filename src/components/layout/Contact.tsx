import { ThemeProvider } from "styled-components"
import { Button } from "../Button"
import { theme } from "../styles/Globals.styled"
import { ContactP, ContactTitle, ContactWrapper, Links, Link} from "./Contact.styled"
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail } from "react-icons/ti";
import { SiDevdotto } from "react-icons/si";


export const Contact = () => {
    return(
        <ThemeProvider theme={theme}>
            <ContactWrapper>
                <ContactTitle>Get in Touch.</ContactTitle>
                <ContactP>I am looking forward to joining as a creative developer!<br />Please contact me if I capture your interest. I can not wait to talk to you.</ContactP>
                <a href="mailto:mia.can2021@gmail.com"><Button title={'Email Me!'}></Button></a>
                <Links>
                    <Link href="https://github.com/miacan2021" target="_blank"><GoMarkGithub size={'30px'} color={"#594a4e"} /></Link>
                    <Link href="https://github.com/miacan2021" target="_blank"><TiSocialLinkedinCircular size={'40px'} color={"#594a4e"} /></Link>
                    <Link href="https://twitter.com/shiho_kazama" target="_blank"><TiSocialTwitterCircular size={'40px'} color={"#594a4e"} /></Link>
                    <Link href="https://twitter.com/shiho_kazama" target="_blank"><SiDevdotto size={'40px'} color={"#594a4e"} /></Link>
                    <Link href="https://dev.to/miacan2021" target="_blank"><TiMail size={'40px'} color={"#594a4e"} /></Link>
                </Links>
            </ContactWrapper>
        </ThemeProvider>
    )
    }