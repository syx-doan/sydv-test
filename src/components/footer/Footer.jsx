import React from 'react';
import './footer.scss';
import link from '~/assets/icons/link.svg';
import twitter from '~/assets/icons/twitter.svg';
import facebook from '~/assets/icons/facebook.svg';
import instagram from '~/assets/icons/instagram.svg';
import taisan from '~/assets/icons/taisan.png';
import visa from '~/assets/icons/visa.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container d-flex mt30">
                <div className="footer-info">
                    <h3 className="footer-title">Công ti Cổ Phần mFaciities</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href className="footer-link">
                                <i className="fa-sharp fa-solid fa-house"></i>Địa chỉ: 29BT1, Mễ Trì Hạ, Nam Từ Liêm Hà
                                Nội
                            </a>
                        </li>

                        <li className="footer-item">
                            <a href className="footer-link">
                                <i className="fa-solid fa-phone"></i>
                                Số điện thoại: (+84)898.12.35.35
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                <i className="fa fa-earth-asia"></i>
                                Website: http://www.vietphudao.edu.vn
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                <i className="fa-solid fa-paper-plane"></i>
                                Gửi liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3 className="footer-title">Gửi liên hệ</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href className="footer-link">
                                Dành cho lớp mới
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                Trở thành gia sư
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                Hướng dẫn sử dụng
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                Hướng dẫn nhận lớp
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3 className="footer-title">Quy định</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href className="footer-link">
                                Quy định đăng ký
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                Bảo mật thông tin
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href className="footer-link">
                                Sơ đồ trang
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-follower">
                    <h3 className="footer-title">Theo dõi chúng tôi</h3>

                    <div className="list-follower">
                        <a href="/">
                            <img src={link} alt="" />
                        </a>
                        <a href="/">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="/">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="/">
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>

                <div className="footer-license">
                    <h3 className="footer-item">Bản quyền thuộc Việt Phụ Đạo Việt Nam © 2022</h3>

                    <img src={visa} alt="" />
                    <img src={taisan} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
