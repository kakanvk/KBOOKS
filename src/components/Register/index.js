import "./register.css"
import loginImg from "../../asset/imgs/login/register.png"
import logo from "../../asset/imgs/MainLogo.png"
import { Link, useNavigate } from "react-router-dom"
import InputBox from "../Login/InputBox"

function Register() {

    let navigate = useNavigate();

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

    const handleLogup = () => {
        navigate('/login');
    }

    return (
        <div className="login-container">
            <div className="login-container__img">
                <Link to="/" style={linkStyle}><img src={logo} alt="" style={imgStyle} /></Link>
                <img src={loginImg} alt="" />
            </div>
            <div className="login-container__loginBox">
                <h2>Đăng kí</h2>
                <div className="login-container__loginBox__input">
                    <InputBox placeholder="Nhập họ và tên" type="text">Họ và tên</InputBox>
                    <InputBox placeholder="Nhập tên đăng nhập" type="text">Tên đăng nhập</InputBox>
                    <InputBox placeholder="Nhập mật khẩu" type="password">Mật khẩu</InputBox>
                    <InputBox placeholder="Nhập lại mật khẩu" type="password">Xác nhận mật khẩu</InputBox>
                </div>
                <div className="rememberMe">
                    <input type="checkbox" id="rememberMe-check"/>
                    <label htmlFor="rememberMe-check">Tôi đồng ý với các điều khoản sử dụng</label>
                </div>
                <button to="/login" className="login-btn" onClick={handleLogup}>ĐĂNG KÍ</button>
                <div className="option-box">
                    <span>Đã có tài khoản?</span>
                    <Link to="/login" style={linkStyle1}>Đăng nhập</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;