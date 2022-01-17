import { useContext } from "react"
import { ModeContext } from "../../..";
import { FeatureContainer, FeaturedWrapper, Cards, ButtonStyle } from "./Featured.styled"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { Card } from "../pattern/Card"
import ProjectData from '../../../ProjectData.json'  
import { Button } from "../pattern/Button"

export const Featured = () => {
    const mode = useContext(ModeContext)

    return(
        <ThemeProvider theme={ mode === 'light' ? theme : darkTheme}>
        <FeaturedWrapper>
            <FeatureContainer />
            <Cards>
             {ProjectData.featured.map((data) => (
                <Card key={data.title} data={data} />
             ))}
            </Cards>
        </FeaturedWrapper>
        <ButtonStyle>
         <Button title={'ALL PROJECTS'}></Button>
        </ButtonStyle>
        </ThemeProvider>
    )
}