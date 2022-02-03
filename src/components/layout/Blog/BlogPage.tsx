import { useState, useEffect } from 'react';
import axios from 'axios'
import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ModeBtn } from "../../layout/Home/Hero.styled";
import { BlogWrapper, Articles, ArticleImg, BlogTitle, BlogSub } from "./BlogPage.styled";
import { motion } from 'framer-motion';



export const BlogPage = () => {
    const {modeTheme, setNextMode} = useSetTheme()
    let width = window.innerWidth;
    const url = 'https://dev.to/api/articles?username=miacan2021'
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(url).then(res => {
            setPosts(res.data)
        }).catch(err => console.log(err))
    }, []);
    
    return(
        <>
        <GrobalStyles />
        <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
        <NavBar/>
        <BlogWrapper>
        <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={width > 768 ? '25px': '20px'} color={"#594a4e"} />
              :
              <MdWbSunny size={width > 768 ? '25px': '20px'} color={"#fffffe"} />
              }
          </ModeBtn>
        <BlogTitle>BLOG</BlogTitle>
        <BlogSub>
            Here are the articles I wrote.
            I sometimes share what I learned on DEV.to.
        </BlogSub>
        <Articles>
       {posts.map((post: any) => {
           return(
               <motion.a whileHover={{ scale: 1.07 }} key={post.id} href={post.url}>
                   <ArticleImg src={post.social_image} alt="sosialimage" />
               </motion.a>
           )
       })}
       </Articles>
        </BlogWrapper>
        <Contact  modeTheme={modeTheme} />
        </ThemeProvider>
        </>
    )
}