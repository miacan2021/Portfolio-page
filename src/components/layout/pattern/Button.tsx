import { ButtonPink, ButtonSpan } from "./Button.styled"

type Props = {
    title: string
  }

export const Button = (props: Props) => {
    return(
        <ButtonPink><ButtonSpan>{props.title}</ButtonSpan></ButtonPink>
    )
}