import './index.css'
import contactImg from "../../asset/imgs/contact.svg"
import mailImg from "../../asset/imgs/mail.svg"
import ggIcon from "../../asset/imgs/login/Google.png"
import fbIcon from "../../asset/imgs/login/Facebook.png"
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import { DataContext } from '../DataStore'

function Contact(){

    const DataStore = useContext(DataContext);

    useEffect(() => {
        DataStore.setNavSelected(4);
    })

    return(
        <div className="container__content ">
            <div className='Contact'>
                <div className='Contact__top'>
                    <div className='Contact__top__left'>
                        <h1>Bạn đang cần sự trợ giúp ?</h1>
                        <h3>Liên hệ ngay với <Link to="/">KBOOKS</Link> thông qua</h3>
                        <div className='Contact__socialMedia'>
                            <div className='Contact__socialMedia__item'>
                                <img src={fbIcon} alt=""/>
                                <span>Fanpage: KBOOKS</span>
                            </div>
                            <div className='Contact__socialMedia__item'>
                                <img src={ggIcon} alt=""/>
                                <span>kbooks.contact@gmail.com</span>
                            </div>
                        </div>
                    </div>  
                    <img src={contactImg} alt=""/>
                </div>
                <div className='Contact__bottom'>
                    <img src={mailImg} alt=""/>
                    <div className='Contact__bottom__content'>
                        <h3>Để lại email của bạn</h3>
                        <span>KBOOKS sẽ liên hệ ngay với bạn thông qua email mà bạn cung cấp</span>
                        <div>
                            <input type="text" placeholder='Nhập email của bạn'/>
                            <button>Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;