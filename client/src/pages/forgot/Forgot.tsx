import React, { useState } from "react";
import "./Forgot.css";
import '../../common/Common.css'
import axios from "axios";
import { ForgotDto } from "../../models";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Forgot() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Email không hợp lệ!");
            return;
        }

        try {
            console.log(email)
            const data = await axios.post<ForgotDto>('http://localhost:8080/api/v1/auth/forgot', {email: email})
            console.log(data)
            if (data.status === 200) {
                localStorage.setItem("emailForgot", email);
                setSuccess("OTP xác nhận quên mật khẩu đã gửi về email của bạn");
                navigate("/forgot-confirm");
            } else {
                setError('Email không tồn tại!')
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className="contain">
                <div className="content ">
                    <div className="py-1"></div>
                    <form className="form my-4" onSubmit={handleSubmit}>
                        <h2 className="login_heading">Quên mật khẩu</h2>
                        <div className="">
                            <div className="username ms-0">
                                <input
                                    className="user_input"
                                    type="text"
                                    placeholder=" "
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label className="label_username">Email</label>
                            </div>
                            {error && <div className="error_message text-center ms-0 ps-0 mb-1">{error}</div>}
                            {success && <div className="success_message text-center ms-0 ps-0 mb-1">{success}</div>}
                            <div className="confirm_button">
                                <input type="submit" className="confirm_button" value="Xác nhận" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Forgot;
