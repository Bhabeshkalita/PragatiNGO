import * as React from 'react'
import * as style from './contactDetails.module.scss'
import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";



const ContectDetails = () => {
    return(
        <div className={style.contectDetails}>
            <div className={style.contectDetails_details}>
                <p className={style.contectDetails_details_p1}><span><AiOutlinePhone/></span> Phone : 9326354704 / 9101256571 </p>
                <p className={style.contectDetails_details_p2}><span><AiOutlineWhatsApp /></span> Whatsapp : 9326354704 / 9101256571 </p>
                <p className={style.contectDetails_details_p3}><span><AiOutlineMail /></span> Email : pragatinagarudya@gmail.com</p>
                <p className={style.contectDetails_details_p4}><span><FaAddressCard /></span> Address : Pragati Nagar , BARSAPARA </p>
            </div>
            <div className={style.contectDetails_map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.70968617262!2d91.73580921476366!3d26.141007183465856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5becf2455d5d%3A0x8aaeb38093af5a03!2sPragati%20Nagar%20Path%2C%20Barsapara%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1636699616624!5m2!1sen!2sin" width="100%" height="400px" style={{border:'0'}} allowfullscreen="" loading="lazy" />
            </div>
        </div>
    )
}

export default ContectDetails ;