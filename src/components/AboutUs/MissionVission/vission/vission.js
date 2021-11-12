import * as React from 'react' ;
import * as style from './vission.module.scss'
import vissionImage from '../../../../images/vission.png'
const Vission = () => {
    return(
        <div className={style.vission}>
            <div className={ style.vission_content}>
                <h3 className={ style.vission_content_h3}><span>Our Vission</span></h3>
                <p className={ style.vission_content_p}>Strengthening and uplifting lives for a better tomorrow.</p>
            </div>
            <div className={ style.vission_Image}>
                <img src={vissionImage} alt='vission image' />
            </div>
        </div>
    )
}

export default Vission ;