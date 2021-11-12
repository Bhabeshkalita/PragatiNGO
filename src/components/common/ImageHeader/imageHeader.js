import * as React from 'react' ;
import * as style from './imageHeader.module.scss' ;
import HeaderImage from '../../../images/aboutHeader.jpg'
import { Link } from 'gatsby';
const ImageHeader = ({pageName , prevLink ,quotes }) => {
    return(
        <div className={style.aboutHeader}>
            <div className={style.aboutHeader_image}>
                <img src={HeaderImage} alt='headerImage' />
            </div>
            <div className={style.aboutHeader_content}>
                <h3 className={style.aboutHeader_content_h3}>{pageName}</h3>
                <p className={style.aboutHeader_content_p1}><Link to='/'>Home</Link><span> / </span><span>{pageName}</span></p>
                <p className={style.aboutHeader_content_p2}>" {quotes} "</p>
            </div>
        </div>
    )
}

export default ImageHeader ; 