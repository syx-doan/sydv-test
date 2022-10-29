import './header.scss';
import Logo from '~/assets/icons/logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from '../button/Button';

function Header() {
    return (
        <>
            <Navbar className="container" as="header">
                <Navbar.Brand href="/">
                    <img className="header-logo" srcSet={Logo} alt="" />
                </Navbar.Brand>
                <Navbar as="nav" className="ms-5 gap">
                    <Nav.Link href="#home">Giới Thiệu</Nav.Link>
                    <Nav.Link href="/register">Trở Thành Giáo Viên</Nav.Link>
                    <Nav.Link href="/register">Trở Thành Học viên</Nav.Link>
                </Navbar>

                <Navbar as="a" href="login" className="btn d-flex justify-content-end">
                    <Button className="button button--primary">Đăng Nhập</Button>
                </Navbar>
            </Navbar>
        </>
    );
}

export default Header;
