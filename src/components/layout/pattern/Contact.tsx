import { useContext } from "react"
import { ModeContext } from "../../..";
import { ThemeProvider } from "styled-components"
import { Button } from "../pattern/Button"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { ContactP, ContactTitle, ContactWrapper, Links, Link, ContactBg} from "./Contact.styled"
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail, TiDocument, TiDeviceLaptop } from "react-icons/ti";
import { SiDevdotto } from "react-icons/si";


export const Contact = () => {
    const mode = useContext(ModeContext)
    return(
        <ThemeProvider theme={ mode === 'light' ? theme : darkTheme}>
            <ContactBg>
            <ContactWrapper id="contact">
                <ContactTitle>Get in Touch.</ContactTitle>
                <ContactP>I am looking forward to joining as a creative developer!<br />Please contact me if I capture your interest. I can not wait to talk to you.</ContactP>
                <a href="mailto:mia.can2021@gmail.com"><Button title={'Say Hello'}></Button></a>
                <Links>
                    <Link href="https://github.com/miacan2021" target="_blank" title={'Resume'}><TiDocument size={'30px'} color={"#594a4e"} /></Link>
                    <Link href="https://github.com/miacan2021" target="_blank" title={'Work'}><TiDeviceLaptop size={'30px'} color={"#594a4e"} /></Link>
                    <Link href="https://github.com/miacan2021" target="_blank" title={'GitHub'}><GoMarkGithub size={'30px'} color={"#594a4e"} /></Link>
                    <Link href="https://github.com/miacan2021" target="_blank" title={'LinkedIn'}><TiSocialLinkedinCircular size={'40px'} color={"#594a4e"} /></Link>
                    <Link href="https://twitter.com/shiho_kazama" target="_blank" title={'Twitter'}><TiSocialTwitterCircular size={'40px'} color={"#594a4e"} /></Link>
                    <Link href="https://dev.to/miacan2021" target="_blank" title={'DEV'}><SiDevdotto size={'40px'} color={"#594a4e"} /></Link>
                    <Link href="mailto:mia.can2021@gmail.com" title={'Mail'}><TiMail size={'40px'} color={"#594a4e"} /></Link>
                </Links>
            </ContactWrapper>
            </ContactBg>
        </ThemeProvider>
    )
    }