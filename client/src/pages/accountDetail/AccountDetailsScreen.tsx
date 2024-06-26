
import React, { useEffect, useState } from "react";

// Icons
import { FaPen, FaRegUser } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";

// CSS
import "./AccountDetailsScreen.css";
import IMG from '../../images/Avatar/avatarClone.png';

import AccountDetails from "./AccountDetails";
import axios from "axios";
import {AddressDto} from "../../models";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
    username: string;
    address: AddressDto[];
}

export const RateSuccess = () => {
    console.log('success')
    toast.success('Đánh giá thành công!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

const AccountDetailScreen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isShow, setIsShow] = useState<string>('profile');
    const token = localStorage.getItem('token');
    // const navigate = useNavigate();
    // const [avatarLink, setAvatarLink] = useState<string>('');
    // let hasShownToast = false;

    const handleSelectShow = (view: string) => {
        setIsShow(view);
    }





    const fetchDataUser = async () => {
        try {
            if (token) {
                const response = await axios.get<User>('http://localhost:8080/api/v1/user/get-data-user', {
                    params: { token: JSON.parse(token).token }
                });
                const userData = response.data;
                setUser(userData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataUser();
    }, [token, isShow]);

    return (
        <>
        <div className='AccountDetailContainer'>
            <div className='AccountDetailWrapper'>
                <div className='AccountDetailSideBar'>
                    <div className='accountDetailImg'>
                        <div className='imgWrapper'>
                            <img src={user?.avatar || IMG} alt='avatar' />
                        </div>
                        <div className='info'>
                            <span className='username'>{user?.username || null}</span>
                            <div className='editProfile'>
                                <FaPen style={{ fontSize: '12px', marginRight: '5px' }} />
                                <span>Sửa hồ sơ</span>
                            </div>
                        </div>
                    </div>
                    <div className='accountDetailItem myAccount'>
            <span className='title'>
              <FaRegUser className='icons' />
              <span>Tài khoản của tôi</span>
            </span>
                        <div className='options'>
                            <button
                                className='profile'
                                style={isShow === 'profile' ? { color: '#27ae61' } : {}}
                                onClick={() => handleSelectShow('profile')}
                            >
                                Hồ sơ
                            </button>
                            <button
                                className='address'
                                style={isShow === 'address' ? { color: '#27ae61' } : {}}
                                onClick={() => handleSelectShow('address')}
                            >
                                Địa chỉ
                            </button>
                            <button
                                className='changePass'
                                style={isShow === 'changePassword' ? { color: '#27ae61' } : {}}
                                onClick={() => handleSelectShow('changePassword')}
                            >
                                Đổi mật khẩu
                            </button>
                        </div>
                    </div>
                    <div
                        className='accountDetailItem purchaseOrder'
                        style={isShow === 'purchaseOrder' ? { color: '#27ae61' } : {}}
                        onClick={() => handleSelectShow('purchaseOrder')}
                    >
                        <BiPurchaseTag className='icons' />
                        <span>Đơn mua</span>
                    </div>
                </div>
                {user ? (
                    <div className='AccountDetailContent'>
                        <AccountDetails
                            nameShow={isShow}
                            user={user}
                            />
                    </div>
                ) : (
                    <div
                        className='AccountDetailContent'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <span>Loading...</span>
                    </div>
                )}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>

        </>
    );
}

export default AccountDetailScreen;
