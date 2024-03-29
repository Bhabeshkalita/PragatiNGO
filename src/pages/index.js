import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeSlider from "../components/Home/slider/slider"
import FeatureBox from "../components/Home/featuresBox/featureBox"
import AboutUs from "../components/Home/AboutUs/aboutUs"
import InternWithUs from "../components/Home/internWithUs/internWithUs"
import Donate from "../components/Home/donate/donate"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeSlider />
    <FeatureBox />
    <AboutUs />
    <InternWithUs />
    <Donate />   
  </Layout>
)

export default IndexPage
