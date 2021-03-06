import { Button } from '../pattern/Button'
import { ContactP, ContactTitle, ContactWrapper, Links, Link, ContactBg } from './Contact.styled'
import { GoMarkGithub } from 'react-icons/go'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail, TiDocument } from 'react-icons/ti'
import { SiDevdotto } from 'react-icons/si'

type Props = {
  modeTheme: string | null
}

export const Contact = ({ modeTheme }: Props) => {
  const width = window.innerWidth

  return (
    <ContactBg>
      <ContactWrapper id="contact">
        <ContactTitle>Contact me!</ContactTitle>
        <ContactP>
          I am looking forward to joining as a creative developer!
          <br />
          Please contact me if I capture your interest. I can not wait to talk to you.
        </ContactP>
        <a href="mailto:mia.can2021@gmail.com">
          <Button title={'Say Hello'}></Button>
        </a>
        <Links>
          <Link href="shiho-kazama-resume.pdf" title={'Resume'} target="_blank">
            <TiDocument size={width > 768 ? '30px' : '20px'} color={modeTheme === 'light' ? '#594a4e' : '#fffffe'} />
          </Link>
          <Link href="https://github.com/miacan2021" target="_blank" title={'GitHub'}>
            <GoMarkGithub size={width > 768 ? '30px' : '20px'} color={modeTheme === 'light' ? '#594a4e' : '#fffffe'} />
          </Link>
          <Link href="https://www.linkedin.com/in/shiho-kazama-659782230/" target="_blank" title={'LinkedIn'}>
            <TiSocialLinkedinCircular
              size={width > 768 ? '40px' : '25px'}
              color={modeTheme === 'light' ? '#594a4e' : '#fffffe'}
            />
          </Link>
          <Link href="https://twitter.com/shiho_kazama" target="_blank" title={'Twitter'}>
            <TiSocialTwitterCircular
              size={width > 768 ? '40px' : '25px'}
              color={modeTheme === 'light' ? '#594a4e' : '#fffffe'}
            />
          </Link>
          <Link href="https://dev.to/miacan2021" target="_blank" title={'DEV'}>
            <SiDevdotto size={width > 768 ? '40px' : '25px'} color={modeTheme === 'light' ? '#594a4e' : '#fffffe'} />
          </Link>
          <Link href="mailto:mia.can2021@gmail.com" title={'Mail'}>
            <TiMail size={width > 768 ? '40px' : '25px'} color={modeTheme === 'light' ? '#594a4e' : '#fffffe'} />
          </Link>
        </Links>
      </ContactWrapper>
    </ContactBg>
  )
}
