import * as React from 'react' ;
import CareCard from './card/CareCard';
import * as style from './whatWeCare.module.scss'
import { verticalSettings } from './sliderSettings';
import Slider from 'react-slick';
import image1 from '../../../images/care1.jpg'
import image2 from '../../../images/care2.jpg'
import image3 from '../../../images/care3.jpg'
const WhatWeCare = () => {
    return(
        <div className={style.whatwecare}>
            <div className={style.whatwecare_heading}>
                <h4 className={style.whatwecare_heading_h4}>What We Care For</h4>
            </div>
            <div className={style.whatwecare_card}>
                <Slider {...verticalSettings}> 
                    <CareCard image={image1} pera="Provision of Food to the Needy and the Mission Towards Eradicating Hunger" />
                    <CareCard image={image2} pera="Letting Education Reach Everyone and Making Learning Fun" />
                    <CareCard image={image3} pera="Provision of Clothing to the Needy"/>
                </Slider>                
            </div>
        </div>
    )
}

export default WhatWeCare ;