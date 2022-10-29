import React, { useState } from 'react';
import './register.scss';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import register from '~/assets/images/contact-register.png';
import Button from '../button/Button';
import Axios from 'axios';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'validator';

function Register() {
   const [fullname, setFullname] = useState('');
   const [password, setPassword] = useState('');
   const [confPassWord, setConfPassWord] = useState('');
   const [phone, setPhone] = useState('');
   const [validateMsg, setValidateMsg] = useState('');
   const navigate = useNavigate();

   const onChangePhone = (e) => {
      const value = e.target.value;
      setPhone(value);
   };
   const onChangeFullName = (e) => {
      const value = e.target.value;
      setFullname(value);
   };
   const onChangePassWord = (e) => {
      const value = e.target.value;
      setPassword(value);
   };
   const onChangeConfPassWord = (e) => {
      setConfPassWord(e.target.value);
      if(confPassWord !== password){
        
      }
   };
   const validateAll = () => {
    const msg = {};
    if (isEmpty(phone)) {
       msg.phone = 'Vui lòng nhập số điện thoại';
    }
    if (isEmpty(password)) {
       msg.password = 'Vui lòng nhập  mật khẩu';
    }
    if (isEmpty(confPassWord)) {
       msg.confPassWord = 'Mật khẩu không giống nhau';
    }
    if (isEmpty(fullname)) {
       msg.fullname = 'Vui lòng nhập tên ';
    }
    setValidateMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
 };

   const handleSubmitRegister = (e) => {
      e.preventDefault();
      const isValidate = validateAll();
      if (!isValidate) return;

      try {
         Axios.post('http://localhost:4000/api/insert', {
            fullname,
            password,
            phone,
         });
         navigate('/login');
      } catch (error) {
         alert('error');
      }
      alert('Thêm thành công');
      setFullname('');
      setPhone('');
      setPassword('');
      setConfPassWord('');
   };

   return (
      <div>
         <div className="wrapper-register">
            <div className="container">
               <div className="row alight-item-center">
                  <div className="col-lg-7">
                     <div className="contact-register">
                        <Heading>Tham gia những khóa học hàng đầu tại Việt Phụ Đạo</Heading>
                        <Text>
                           Việt Phụ Đạo tự hào là người đồng hành cùng bạn trên hành trình gặt hái tri thức - mở cửa
                           tương lai.
                        </Text>
                        <img src={register} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="form-box">
                        <Heading className="text-center mb-5">Đăng ký trở thành học viên</Heading>
                        <form action="" className="form-register">
                           <div className="form-item">
                              <div className="row flex-column flex-wrap">
                                 <div className="form-label col">
                                    <label htmlFor="" className="">
                                       Họ tên
                                    </label>
                                 </div>
                                 <div className="form-input col">
                                    <div className="input-content">
                                       <input
                                          value={fullname}
                                          onChange={onChangeFullName}
                                          type="text"
                                          placeholder="Nhập họ và tên"
                                          className="input-item"
                                       />
                                    </div>
                                 </div>
                                 <div className="d-flex mt-2">
                                    <div className="validateMsg">{validateMsg.fullname}</div>
                                 </div>
                              </div>
                           </div>
                           <div className="form-item">
                              <div className="row flex-column flex-wrap">
                                 <div className="form-label col">
                                    <label htmlFor="" className="">
                                       Số điện thoại đăng nhập
                                    </label>
                                 </div>
                                 <div className="form-input col">
                                    <div className="input-content">
                                       <input
                                          value={phone}
                                          onChange={onChangePhone}
                                          type="number"
                                          placeholder="Nhập số điện thoại"
                                          className="input-item"
                                       />
                                    </div>
                                 </div>
                                 <div className="d-flex mt-2">
                                    <div className="validateMsg">{validateMsg.phone}</div>
                                 </div>
                              </div>
                           </div>
                           <div className="form-item">
                              <div className="row flex-column flex-wrap">
                                 <div className="form-label col">
                                    <label htmlFor="" className="">
                                       Mật khẩu
                                    </label>
                                 </div>
                                 <div className="form-input col">
                                    <div className="input-content">
                                       <input
                                          value={password}
                                          onChange={onChangePassWord}
                                          type="password"
                                          placeholder="Nhập mật khẩu"
                                          className="input-item"
                                       />
                                    </div>
                                 </div>
                                 <div className="d-flex mt-2">
                                    <div className="validateMsg">{validateMsg.password}</div>
                                 </div>
                              </div>
                           </div>
                           <div className="form-item">
                              <div className="row flex-column flex-wrap">
                                 <div className="form-label col">
                                    <label htmlFor="" className="">
                                       Nhập lại mật khẩu
                                    </label>
                                 </div>
                                 <div className="form-input col">
                                    <div className="input-content">
                                       <input
                                          value={confPassWord}
                                          onChange={onChangeConfPassWord}
                                          type="password"
                                          placeholder="Nhập lại mật khẩu"
                                          className="input-item"
                                       />
                                    </div>
                                 </div>
                                 <div className="d-flex mt-2">
                                    <div className="validateMsg">{validateMsg.confPassWord}</div>
                                 </div>
                              </div>
                           </div>
                           <div className="form-item">
                              <div className="row flex-column flex-wrap">
                                 <div className="input-content">
                                    <div className="radio">
                                       <label htmlFor="" className="radio-wrapper">
                                          <input type="radio" />
                                          <span className="radio-name">Tôi là học sinh</span>
                                       </label>
                                       <label htmlFor="" className="radio-wrapper">
                                          <input type="radio" />
                                          <span className="radio-name">Tôi là phụ huynh</span>
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="mt30">
                              <Button onClick={handleSubmitRegister} className="button button--primary">
                                 Đăng Ký
                              </Button>
                           </div>
                           <div className="text-center mt30 text-register">
                              <strong>Đã có tài khoản? </strong>
                              <a href="/#">Đăng nhập</a>
                           </div>
                           <div className="text-center mt-5">
                              <div className="description-register">
                                 Bằng việc chọn đăng ký, bạn đã đồng ý với các
                                 <a href="/#">Điều khoản sử dụng</a> và <a href="/#">Chính sách bảo mật</a> của chúng
                                 tôi
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Register;
