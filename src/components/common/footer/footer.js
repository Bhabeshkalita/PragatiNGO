import * as React from 'react' ;
import * as style from './footer.module.scss'

import facebook from '../../../images/icon/facebook.png' ;
import insta from '../../../images/icon/instagram.png'
import twitter from '../../../images/icon/twitter.png'
import whatsapp from '../../../images/icon/whatsapp.png'
import logo from '../../../images/LOGO.png'
import { Link } from 'gatsby';

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footer_social}>
                <div className={style.footer_social_heading}>
                    <img src={logo} alt='logo'/>
                    <p>PRAGATI NAGAR UDYAMI NGO</p>
                </div>
                <div className={style.footer_social_icon}>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={facebook} alt='Footer_logo' /></Link></div>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={insta} alt='Footer_logo' /></Link></div>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={twitter} alt='Footer_logo' /></Link></div>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={whatsapp} alt='Footer_logo' /></Link></div>
                </div>
            </div>
            <div className={style.footer_newsletter}>
                <h3>Stay And Support Us</h3>
                <p>Your Email</p>
                <input type='text' placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer ;