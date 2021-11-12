import * as React from 'react' ;
import * as style from './careCard.module.scss'
// import image from '../../../../images/care1.jpg'
const CareCard = ({image, pera}) => {
    return(
        <div className={style.careCard}>
            <div className={style.careCard_container}>
                <div className={style.careCard_container_image}>
                    <img src={image} alt='careImage' />
                </div>
                <div className={style.careCard_container_content}>
                    <h3 className={style.careCard_container_content_h3}>{pera}</h3>
                </div>
            </div>
        </div>
    )
}

export default CareCard ;