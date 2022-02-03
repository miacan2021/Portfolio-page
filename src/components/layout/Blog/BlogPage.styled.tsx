import styled from "styled-components";

export const BlogWrapper = styled.div`
   width: 100vw;
   height: auto;
   background: ${({theme}) => theme.palette.beige};
   padding-bottom: 40px;
   padding-top: 140px;
   @media (max-width: ${({theme}) => theme.mobile}) {
        height: auto;
        padding-bottom: 40px;
       }
`

export const BlogTitle = styled.h1`
    font-size: 38px;
    margin: auto;
    letter-spacing: 3px;
    text-align: center;
    font-family: 'Josefin Slab', serif;
    background: ${({theme}) => theme.palette.white};
    color: ${({theme}) => theme.palette.sub_text};
    width: 40%;
    padding: 10px 0;
   @media (max-width: ${({theme}) => theme.mobile}) {
    font-size: 20px;
       }
`


export const BlogSub = styled.h1`
      font-size: 18px;
      color: ${({theme}) => theme.palette.head_text};
      text-align: center;
      padding-top: 20px;
      width: 80%;
      margin: auto;
      @media (max-width: ${({theme}) => theme.mobile}) {
      font-size: 16px;
       }

`

export const Articles = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 10px;
    padding: 30px 0;
    @media (max-width: ${({theme}) => theme.mobile}) {
      gap: 4px;
       }
`

export const ArticleImg = styled.img`
 width: 400px;
 height: 200px;
 object-fit: cover;
 @media (max-width: ${({theme}) => theme.mobile}) {
    width: 300px;
    height: 150px;
       }
`