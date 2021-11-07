import { Link } from 'gatsby';
import * as React from 'react' ;
import * as style from './donate.module.scss'

const Donate = () => {
    return(
        <div className={style.donate}>
            <div className={style.donate_container}>
                <p className={style.donate_container_p}>LEND US YOUR HELPING HAND</p>
                <h3 className={style.donate_container_h3}>TOGETHER WE CAN ENDEAVOUR A BETTER WORLD</h3>
                <Link className={style.donate_container_link}><button>Donate</button></Link>
            </div>
        </div>
    )
}

export default Donate ;