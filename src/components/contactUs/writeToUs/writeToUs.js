import * as React from 'react' ;
import * as style from './writetoUs.module.scss'
import { ImPencil2 } from "@react-icons/all-files/im/ImPencil2";

const WriteToUs = () => {
    return(
        <div className={style.writetous}>
            <div className={style.writetous_heading}>
                <h3 className={style.writetous_heading_h3}><span> <ImPencil2 /> </span>
                Write To Us</h3>
            </div>
            <div className={style.writetous_form}>
                <form className={style.writetous_form_container}>
                    <div className={style.writetous_form_container_input1}>
                        <label for='name'>Full Name</label>
                        <input name='name' id='name' placeholder="Full Name" />                        
                    </div>
                    <div className={style.writetous_form_container_input2}>
                        <div className={style.writetous_form_container_input2_phone}>
                            <label for='phone'>Phone Number</label>
                            <input name='phone' id='phone' placeholder="Phone Number" /> 
                        </div>
                        <div className={style.writetous_form_container_input2_email}>
                            <label for='email'>Email</label>
                            <input name='email' id='email' placeholder="Email" /> 
                        </div>
                    </div>
                    <div className={style.writetous_form_container_input3}>
                        <label for='message'>Message</label>
                        <textarea rows='10' placeholder="enter your Message" name='message' id='message'/>
                    </div>
                    <div className={style.writetous_form_container_button}>
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WriteToUs ;