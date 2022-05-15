import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  background: ${({ theme }) => theme.palette.beige};
  width: 100vw;
  height: 2000px;
`
export const Loading = styled.div`
  background: ${({ theme }) => theme.palette.beige};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: nowrap;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 10px;
  }
`

export const LoadingImg = styled.img`
  width: 60px;
  overflow: hidden;
`

export const LoadingText = styled.img`
  overflow: hidden;
  font-size: 28px;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.palette.head_text};
`

export const Home = styled.div`
  background: ${({ theme }) => theme.palette.beige};
  width: 100vw;
  height: auto;
  padding-top: 130px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 100px;
  }
`
export const HeroWrapper = styled.div`
  font-family: 'Abel', sans-serif;
  color: ${({ theme }) => theme.palette.head_text};
  padding: 0px 20px 80px 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0px 5px 50px 5px;
    overflow: hidden;
  }
`
export const HeroContainer = styled.div`
  width: 80%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`
export const HeroTitle = styled.div`
  position: relative;
  left: -50px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 10px;
  }
`

export const Hello = styled.h1`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 25px;
  }
`
export const Name = styled.h1`
  font-size: 144px;
  letter-spacing: 6px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 60px;
    letter-spacing: 4px;
  }
`
export const FamilyName = styled.h1`
  font-size: 72px;
  letter-spacing: 30px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 30px;
    letter-spacing: 20px;
  }
`
export const Title = styled.h1`
  margin-top: 10px;
  font-size: 36px;
  letter-spacing: 2px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 20px;
  }
`
export const TitleBorder = styled.span`
  background-color: ${({ theme }) => theme.palette.pink};
  padding: 0 5px;
  border: ${({ theme }) => `1px solid ${theme.palette.sub_text}`};
`
export const Img = styled.div`
  position: absolute;
  top: 50px;
  left: 380px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 12px;
    left: 185px;
  }
`
export const TopImg = styled.button`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => `30px 5px 0px 0 ${theme.palette.pink}`};
  border: ${({ theme }) => `2px solid ${theme.palette.head_text}`};
  background-image: url('img/photo.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.palette.pink};
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    box-shadow: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 130px;
    height: 130px;
    box-shadow: ${({ theme }) => `15px 5px 0px 0 ${theme.palette.pink}`};
  }
`

export const ModeBtnWrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  max-width: 1440px;
  height: 40px;
  padding-right: 60px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-right: 5%;
    top: 50px;
  }
`

export const ModeBtnWrapperAbout = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 85%;
  max-width: 1440px;
  height: 40px;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 10%;
    width: 94%;
  }
`
export const ModeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.palette.beige};
  border: ${({ theme }) => `1px solid ${theme.palette.head_text}`};
  box-shadow: ${({ theme }) => `5px 5px 0px 0 ${theme.palette.pink}`};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    box-shadow: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 30px;
    height: 30px;
    box-shadow: ${({ theme }) => `3px 3px 0px 0 ${theme.palette.pink}`};
  }
`
