import "styled-components"

export interface Theme {
    palette: {
        white: string,
        beige: string,
        pink: string,
        light_pink: string,
        green: string,
        head_text: string,
        sub_text: string,
        },
    mobile: string
  }

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}