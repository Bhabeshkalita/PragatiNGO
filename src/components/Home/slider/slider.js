import * as React from "react" ;
// import { Link } from 'gatsby';
// import NavBar from '../../common/navBar/navBar' ;
import Slider from "react-slick";
import image from '../../../images/image1.jpg'
import image2 from '../../../images/image2.jpg'
import * as style from './slider.module.scss' ;
import SliderCard from "./SliderCard/sliderCard";
const settings = {
    dots:false,
    infinity:true,
    autoplay:true,
    className:"NGOSlider"
}

const HomeSlider = () => {
    return(
        <div className={style.slider}> 
            <Slider {...settings}>                    
                <SliderCard ima={image2}  />
                <SliderCard ima={image} />
            </Slider>
        </div>
    )
}

export default HomeSlider ;