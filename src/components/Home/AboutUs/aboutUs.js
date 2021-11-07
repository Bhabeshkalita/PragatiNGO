import { Link } from 'gatsby'
import * as React from 'react'
import * as style from './aboutus.module.scss'
import AboutImage from '../../../images/image1.jpg'
const AboutUs = () => {
    return(
        <div className={style.aboutus}>
            <div className={style.aboutus_container}>
                <div className={style.aboutus_container_image}>
                    <img src={AboutImage} alt='image' /> 
                </div>
                <div className={style.aboutus_container_content}>
                    <h4 className={style.aboutus_container_content_h4}>About Us</h4>
                    <h5 className={style.aboutus_container_content_h5}>Strength Trust Sincerity Faith Growth Confidence</h5>
                    <p className={style.aboutus_container_content_p1}>This initiative is a platform created by like minded people, pledging to work with commitment.We stand by our vision which states, ‘Strengthening and uplifting lives for a better tomorrow’. We aim at working for the marginalised and underprivileged sections of the people in Assam and providing them with aid and opportunities. Our motto is, ‘Endeavouring a better world’ and our target is to reach out to a maximum number of people, for we believe, little bit of courage can do wonders.</p>
                    <p className={style.aboutus_container_content_p2}>Our logo stands for the principles of strength, trust, sincerity, faith, growth and confidence.</p>
                    <button className={style.aboutus_container_content_button}><Link to='/'>Read More...</Link></button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs ;