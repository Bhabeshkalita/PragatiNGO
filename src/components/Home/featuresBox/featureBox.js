import * as React from 'react' ;
import * as style from './featureBox.module.scss'
import FeatureCard from './featureCard/featureCard';
import colaboration from '../../../images/cardIcon/png/collaboration.png'
import education from '../../../images/cardIcon/png/education.png'
import food from '../../../images/cardIcon/png/food.png'
import strength from '../../../images/cardIcon/png/strength.png'
import community from '../../../images/cardIcon/png/community2.png'
import awareness from '../../../images/cardIcon/png/awareness.png'
import Slider from "react-slick";
import { settings } from './settingsSlider'

// const settings = {
//     dots:false,
//     infinity:true,
//     autoplay:true,
//     className:"NGOSlider"
// } 
const FeatureBox = () => {
    return(
        <div className={style.featureBox}> 
        <Slider {...settings}>           
            <div className={style.featureBox_card}>
                <FeatureCard 
                image={education}
                heading="We Educate" 
                pera="The underprivileged children who are deprived of basic education. We aim at making learning fun and letting it reach everyone." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard 
                image={colaboration}
                heading="We Collaborate" 
                pera="We are open to collaborate with various non profit and other organisations in achieving collective goals for the society." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard 
                image={strength}
                heading="We Strengthen" 
                pera="We aim at uplifting and strengthening lives of people. We believe that little bit of courage can do wonders." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard 
                image={food}
                heading="We Provide Food & Warmth" 
                pera="To the ones who are deprived of basic needs. We organise events to provide food and clothes to the needy. #sharethemeal #sharethewarmth " />
            </div>         
            <div className={style.featureBox_card}>
                <FeatureCard 
                image={awareness}
                heading="We Spread Awareness" 
                pera="We work as an organisation to spread awareness about the needful issues through our social media platforms. We also conduct interactive sessions to listen to opinions." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard 
                image={community}
                heading="We Build Communities" 
                pera="Our focus is to reach out to maximum number of people and providing a platform to everyone who wants to bring a change." />
            </div>
            {/* <div className={style.featureBox_card}>
                <FeatureCard heading="We Strengthen" pera="We aim at uplifting and strengthening lives of people. We believe that little bit of courage can do wonders." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard heading="We Strengthen" pera="We aim at uplifting and strengthening lives of people. We believe that little bit of courage can do wonders." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard heading="We Spread Awareness" pera="We work as an organisation to spread awareness about the needful issues through our social media platforms. We also conduct interactive sessions to listen to opinions." />
            </div>
            <div className={style.featureBox_card}>
                <FeatureCard heading="We Build Communities" pera="We aim at building a larger group of people who can collectively work for the betterment of the society. Our focus is to reach out to maximum number of people and providing a platform to everyone who wants to bring a change." />
            </div> */}
        </Slider>
        </div>
    )
}

export default FeatureBox;