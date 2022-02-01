import { ButtonPink, ButtonSpan } from "./Button.styled"
import { motion } from 'framer-motion'

type Props = {
    title: string
  }

export const Button = (props: Props) => {
    return(
        <ButtonPink as={motion.button} whileHover={{ scale: 1.05 }} ><ButtonSpan>{props.title}</ButtonSpan></ButtonPink>
    )
}