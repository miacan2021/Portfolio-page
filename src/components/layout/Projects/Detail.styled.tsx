import styled from "styled-components";


export const ContentWarapper = styled.div`
  background: ${({theme}) => theme.palette.beige};
  width: 100vw;
  height: auto;
  padding-top: 130px;
`

export const ContentTitle = styled.h1`
  color: ${({theme}) => theme.palette.head_text};
  font-size: 28px;
  text-align: center;
`