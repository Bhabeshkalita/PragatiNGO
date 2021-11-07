import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react' ;
import TextBox from '../sliderTextBox/sliderTextBox';
import * as style from './sliderCard.module.scss'
// import image from '../../../../images/image1.jpg'
const SliderCard = ({ima}) => {
    // console.log(ima)
    return(
        <div className={style.sliderCard}>
            <div className={style.sliderCard_describe}>
                <TextBox />
            </div>
            <div className={style.sliderCard_image}>
                <img src={ima}  alt='image' />
            </div>
        </div>
    )
}

export default SliderCard ;