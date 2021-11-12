import * as React from 'react' ;
import * as style from './mission.module.scss'
import messionImage from '../../../../images/mission.png'
const Mission = () => {
    return(
        <div className={style.mession}>
            <div className={style.mession_content}>
                <h3 className={style.mession_content_h3}><span>Our Mession</span></h3>
                <p className={style.mession_content_p}>Udyami aims at improving the well being and providing relief to the marginalized and underprivileged 
                    sections of people in Assam, with the motto of betterment of lives and installing courage and positivity amongst people. This foundation is a 
                    platform created by like-minded people who aims at working for a better tomorrow. We pledge to work for the provision of opportunities for the 
                    marginalized section of people, who can make use of it for their betterment.</p>
            </div>
            <div className={style.mession_Image}>
                <img src={messionImage} alt='mession image' />
            </div>
        </div>
    )
}

export default Mission ;