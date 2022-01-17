import { FeatureContainer, FeaturedWrapper, Cards, ButtonStyle } from "./Featured.styled"
import { Card } from "../pattern/Card"
import ProjectData from '../../../ProjectData.json'  
import { Button } from "../pattern/Button"

export const Featured = () => {
    return(
        <>
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
        </>
    )
}