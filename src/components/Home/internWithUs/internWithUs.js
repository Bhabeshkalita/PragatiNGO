import { Link } from 'gatsby';
import * as React from 'react' ;
import * as style from './internWithUs.module.scss'

const InternWithUs = () => {
    return(
        <div className={style.intern}>
            <h2 className={style.intern_h2}>Intern With Us</h2>
            <p className={style.intern_p}>We support children and youth to reach their full potential lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            <button className={style.intern_button}><Link to='/'> Apply Now </Link></button>
        </div>
    )
}

export default InternWithUs ;