import * as React from 'react';
import * as classes from  "./sliderTextBox.module.scss" ;

const TextBox = () => {
    return(
        <div className={classes.textBox}>
            <h4 className={classes.textBox_h4}>Giving a Little Is Better Than Not Giving At All.</h4>
            <p className={classes.textBox_p1}>giving is the greatest act of grace</p>
            <p className={classes.textBox_p2}>You have two hands. One to help yourself, the second to help others.</p>
        </div>
    )
}

export default TextBox ;