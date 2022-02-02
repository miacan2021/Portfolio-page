import styled from "styled-components";

export const Content = styled.div`
  background: ${({theme}) => theme.palette.beige};
  width: 100vw;
`
export const ContentWarapper = styled.div`
  padding-top: 130px;
  max-width: 1350px;
  width: 80%;
  margin: auto;
  background: ${({theme}) => theme.palette.white};
  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 90%;
       }
`

export const ContentTitle = styled.h1`
  color: ${({theme}) => theme.palette.sub_text};
  font-size: 32px;
  text-align: center;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: ${({theme}) => theme.mobile}) {
    font-size: 16px;
       }
`

export const Line = styled.div`
  width: 50px;
  height: 2px;
  background: ${({theme}) => theme.palette.light_pink};
  margin: 30px auto;
`

export const Skills = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
  @media (max-width: ${({theme}) => theme.mobile}) {
    gap: 1px;
       }
`

export const Skill = styled.li`
  font-family: 'Abel', sans-serif;
  padding: 8px;
  font-size: 16px;
  letter-spacing: 1px;
  color:  ${({theme}) => theme.palette.sub_text};
  @media (max-width: ${({theme}) => theme.mobile}) {
    font-size: 12px;
       }
`
export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
  @media (max-width: ${({theme}) => theme.mobile}) {
    padding: 10px 0;
       }
`

export const HoverMsg = styled.p`
  animation: flash 1s linear infinite;
  font-family: 'Abel', sans-serif;
  font-size: 14px;
  letter-spacing: 4px;
  color:  ${({theme}) => theme.palette.sub_text};
  margin-bottom: 10px;
    @keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
}

`
export const TopImg = styled.img`
  width: 500px;
  border-radius: 5px;
  margin-bottom: 30px;
  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 80%;
    margin-bottom: 10px;
       }
`

export const SubImg = styled.img`
  width: 40%;
  border-radius: 5px;
  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 80%;
    padding-top: 20px;
       }
`

export const Section = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: ${({theme}) => theme.mobile}) {
       flex-direction: column;
       padding: 10px 20px;
       }
`

export const SectionRev = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: ${({theme}) => theme.mobile}) {
       flex-direction: column;
       padding: 10px 20px;
       }
`

export const TextSection = styled.div`
  height: auto;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme}) => theme.palette.sub_text};
  @media (max-width: ${({theme}) => theme.mobile}) {
     width: 100%;
       }
`


export const TextH1 = styled.h1`
  font-size: 28px;
  letter-spacing: 3px;
  @media (max-width: ${({theme}) => theme.mobile}) {
     font-size: 22px;
     text-align: center;
       }
`


export const TextP = styled.p`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 10px;
  @media (max-width: ${({theme}) => theme.mobile}) {
     font-size: 15px;
     text-align: center;
       }
`


export const DescSection = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  @media (max-width: ${({theme}) => theme.mobile}) {
     width: 90%;
       }
`

export const BackBtn = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: none; 
  background: none;
  margin: 20px auto;
  display: block;
`