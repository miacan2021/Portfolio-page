import { FeatureContainer, FeaturedWrapper, Cards } from "./Featured.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/Globals.styled"
import { Card } from "../Card"
import ProjectData from '../../ProjectData.json'  

export const Featured = () => {
    return(
        <ThemeProvider theme={theme}>
        <FeaturedWrapper>
            <FeatureContainer>
              FEATURED PROJECTS
            </FeatureContainer>
            <Cards>
             {ProjectData.featured.map((data) => (
                <Card data={data} />
             ))}
            </Cards>
        </FeaturedWrapper>
        </ThemeProvider>
    )
}