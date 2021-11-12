import * as React from 'react'
import * as style from './featureCard.module.scss';

// import icon from '../../../../images/cardIcon/png/collaboration.png'

const FeatureCard = ({ image, heading , pera}) => {
    return(
        <div className={style.featureCard}>
            <div className={style.featureCard_conatiner}>
                <div className={style.featureCard_conatiner_image}>
                    <img src={image} alt='icon' /> 
                </div>
                <h4 className={style.featureCard_conatiner_h4}>{heading}</h4>
                <div className={style.featureCard_conatiner_content}>
                    <p className={style.featureCard_conatiner_content_p}>{pera}</p>                    
                </div>
            </div>
        </div>
    )
}

export default FeatureCard ;