import "./login.css"
import loginImg from "../../asset/imgs/login/login.png"
import logo from "../../asset/imgs/MainLogo.png"
import { Link, useNavigate } from "react-router-dom"
import InputBox from "./InputBox"
import googleIcon from "../../asset/imgs/login/Google.png"
import facebookIcon from "../../asset/imgs/login/Facebook.png"
import { DataContext } from "../DataStore"
import { useContext } from "react"

function Login() {

    let navigate = useNavigate()

    const DataStore = useContext(DataContext);

    const linkStyle = {
        display: "block",
        width: "25%"
    }

    const imgStyle = {
        display: "block",
        width: "100%"
    }

    const linkStyle1 = {
        textDecoration: "none",
        color: "#0014C3"
    }

    const handleLogin = () => {
        DataStore.setIsLogin(true);
        console.log(DataStore.isLogin);
        navigate('/');
    }

    return (
        <div className="login-container">
            <div className="login-container__img">
                <Link to="/" style={linkStyle}><img src={logo} alt="" style={imgStyle} /></Link>
                <img src={loginImg} alt="" />
            </div>
            <div className="login-container__loginBox">
                <h2>Đăng nhập</h2>
                <div className="login-container__loginBox__input">
                    <InputBox placeholder="Nhập tên đăng nhập" type="text">Tên đăng nhập</InputBox>
                    <InputBox placeholder="Nhập mật khẩu" type="password">Mật khẩu</InputBox>
                </div>
                <div className="rememberMe">
                    <input type="checkbox" id="rememberMe-check"/>
                    <label htmlFor="rememberMe-check">Nhớ lần đăng nhập này</label>
                </div>
                <button className="login-btn" onClick={handleLogin}>ĐĂNG NHẬP</button>
                <div className="remember-password">
                    <span>Quên mật khẩu?</span>
                    <Link to="/register" style={linkStyle1}>Đăng kí</Link>
                </div>
                <span>Hoặc</span>
                <div className="orther-login">
                    <div className="other-login-button"><img src={facebookIcon} alt=""/>Đăng nhập với Facebook</div>
                    <div className="other-login-button"><img src={googleIcon} alt=""/>Đăng nhập với Google</div>
                </div>
            </div>
        </div>
    )
}

export default Login;