import * as React from "react";
import * as style from './width.module.scss'
const FixWidth = ({children}) => {
    return(
        <div className={style.width}>
            {children}
        </div>
    )
}

export default FixWidth ;