import * as React from 'react' ;
import * as style from './discover.module.scss'

const DiscoverUs = () => {
    return(
        <div className={style.discover}>
            <h3 className={style.discover_h3}>Discover Us</h3>
            <p className={style.discover_p1}>We want to reach out to maximum number of people. There are issues that are only talked about
                And as youngsters we felt the need to be able to stand up for a cause. 
                That’s how we began with the idea of forming an NGO.</p>
            {/* <p>
                <span></span>
                <span></span>
                <span></span>
            </p> */}
        </div>
    )
}

export default DiscoverUs ;