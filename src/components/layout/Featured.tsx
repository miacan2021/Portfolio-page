import { FeatureContainer, FeaturedWrapper, Cards, ButtonStyle } from "./Featured.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/Globals.styled"
import { Card } from "../Card"
import ProjectData from '../../ProjectData.json'  
import { Button } from "../Button"

export const Featured = () => {
    return(
        <ThemeProvider theme={theme}>
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