import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title: string
}

const SEO = ({ title }: Props) => {
  return <Helmet title={title} htmlAttributes={{ lang: 'en' }} />
}

export default SEO
