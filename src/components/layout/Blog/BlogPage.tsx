import { useState, useEffect } from 'react'
import axios from 'axios'
import { Contact } from '../pattern/Contact'
import { GrobalStyles } from '../../styles/Globals.styled'
import { NavBar } from '../pattern/NavBar'
import { ThemeProvider } from 'styled-components'
import { theme, darkTheme } from '../../styles/Globals.styled'
import { useSetTheme } from '../../../hooks/useSetTheme'
import { MdModeNight, MdWbSunny } from 'react-icons/md'
import { ModeBtn, ModeBtnWrapper } from '../../layout/Home/Hero.styled'
import { BlogWrapper, Articles, ArticleImg, BlogTitle, BlogSub } from './BlogPage.styled'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BackBtn } from '../Projects/Detail.styled'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

export const BlogPage = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const width = window.innerWidth
  const url = 'https://dev.to/api/articles?username=miacan2021'
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <GrobalStyles />
      <ThemeProvider theme={modeTheme === 'light' ? theme : darkTheme}>
        <NavBar />
        <BlogWrapper>
          <ModeBtnWrapper>
            <ModeBtn onClick={() => setNextMode(modeTheme)}>
              {modeTheme === 'light' ? (
                <MdModeNight size={width > 768 ? '25px' : '18px'} color={'#594a4e'} />
              ) : (
                <MdWbSunny size={width > 768 ? '25px' : '18px'} color={'#fffffe'} />
              )}
            </ModeBtn>
          </ModeBtnWrapper>
          <BlogTitle>BLOG</BlogTitle>
          <BlogSub>Here are the articles I wrote. I sometimes share what I learned on DEV.to.</BlogSub>
          <Articles>
            {posts.map((post: any) => {
              return (
                <motion.a whileHover={{ scale: 1.07 }} key={post.id} href={post.url}>
                  <ArticleImg src={post.social_image} alt="sosialimage" />
                </motion.a>
              )
            })}
          </Articles>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}>
            <IoArrowBackCircleOutline
              size={width > 768 ? '40px' : '30px'}
              color={modeTheme === 'light' ? '#594a4e' : '#fff'}
            />
          </BackBtn>
        </BlogWrapper>
        <Contact modeTheme={modeTheme} />
      </ThemeProvider>
    </>
  )
}
