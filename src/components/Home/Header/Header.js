import * as React from "react" ;
import NavBar from '../../common/navBar/navBar' ;
import * as style from './header.module.scss' ;

const Header = ({ siteTitle }) => {
    return(
        <header className={style.header}>
            <NavBar title={siteTitle} />            
        </header>
    )
}

export default Header ;