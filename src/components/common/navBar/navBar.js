import * as React from 'react' ;
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "./navBar.module.scss" ;
const NavBar = ({ title }) => {
    const [scroll, setScroll] = React.useState(window.scrollY) ;
    React.useEffect(()=>{        
        const handleScroll = () => setScroll(window.scrollY) ;
        window.addEventListener("scroll" , handleScroll) ;
        return () => window.removeEventListener('scroll' , handleScroll) ;
    })
    return(        
        <nav className={scroll > 0 ? classes.navscroll :classes.nav }  >
            {console.log(scroll)}
            <div className={scroll > 0 ?classes.navscroll_logo :classes.nav_logo}>
                <StaticImage src='../../../images/LOGO.png' alt='logo'  />
                <div className={scroll > 0 ?classes.navscroll_logo_title :classes.nav_logo_title}>
                    <h3 className={scroll > 0 ?classes.navscroll_logo_title_h3 :classes.nav_logo_title_h3}>
                        <Link to='/'>{title}</Link>
                    </h3>
                </div>
            </div>
            <div className={scroll > 0 ?classes.navscroll_page :classes.nav_page}>
                <div className={scroll > 0 ?classes.navscroll_page_link :classes.nav_page_link}><Link to='/'>About Us</Link></div>
                <div className={scroll > 0 ?classes.navscroll_page_link :classes.nav_page_link}><Link to='/'>Intern With Us</Link></div>
                <div className={scroll > 0 ?classes.navscroll_page_link :classes.nav_page_link}><Link to='/'>Donate</Link></div>
                <div className={scroll > 0 ?classes.navscroll_page_link :classes.nav_page_link}><Link to='/'>Contect Us</Link></div>
            </div>
        </nav>
    )
}
// )
export default NavBar ;