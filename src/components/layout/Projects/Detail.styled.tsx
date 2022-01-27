import styled from "styled-components";

export const ContentWarapper = styled.div`
  background: ${({theme}) => theme.palette.beige};
  width: 100vw;
  height: auto;
  padding-top: 130px;
`

export const ContentTitle = styled.h1`
  color: ${({theme}) => theme.palette.head_text};
  font-size: 32px;
  text-align: center;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
`

export const Line = styled.div`
  width: 50px;
  height: 2px;
  background: ${({theme}) => theme.palette.light_pink};
  margin: 20px auto;
`

export const Skills = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`

export const Skill = styled.li`
  font-family: 'Abel', sans-serif;
  padding: 8px;
  font-size: 16px;
  letter-spacing: 1px;
  color:  ${({theme}) => theme.palette.head_text};

`
export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
`

export const HoverMsg = styled.p`
  animation: flash 1s linear infinite;
  font-family: 'Abel', sans-serif;
  font-size: 14px;
  letter-spacing: 4px;
  color:  ${({theme}) => theme.palette.head_text};
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
`
