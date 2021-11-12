import * as React from 'react' ;
import Mission from './mission/mission';
import * as style from './missionVission.module.scss'
import Vission from './vission/vission';

const MissionVission = () => {
    return(
        <div className={style.missionvission}>
            <div className={style.missionvission_mission}>
                <Mission />
            </div>
            <div className={style.missionvission_vission}>
                <Vission/>
            </div>
        </div>
    )
}

export default MissionVission ;