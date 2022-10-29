import React, { useState } from 'react';
import './login.scss';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import register from '~/assets/images/contact-register.png';
import Button from '../button/Button';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'validator';

function Login() {
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const [validateMsg, setValidateMsg] = useState('');
   const navigate = useNavigate();

   const onChangePhone = (e) => {
      const value = e.target.value;
      setPhone(value);
   };
   const onChangePassWord = (e) => {
      const value = e.target.value;
      setPassword(value);
   };

   const validateAll = () => {
      const msg = {};
      if (isEmpty(phone)) {
         msg.phone = 'Vui lòng nhập số điện thoại';
      }
      if (isEmpty(password)) {
         msg.password = 'Vui lòng nhập số mật khẩu';
      }
      setValidateMsg(msg);
      if (Object.keys(msg).length > 0) return false;
      return true;
   };

   const handleSubmitLogin = (e) => {
      e.preventDefault();
      const isValidate = validateAll();
      if (!isValidate) return;

      Axios.post('http://localhost:4000/api/login', {
         phone,
         password,
      }).then((response) => {
         if (response.data.message) {
            alert(response.data.message);
         } else {
            alert('Xin chào : ' + response.data[0].fullname);
            navigate('/');
         }
      });
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
                        <Heading className="text-center mb-5">Đăng nhập</Heading>
                        <form action="" className="form-register">
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
                                          onChange={onChangePhone}
                                          type="number"
                                          placeholder="Nhậpsố điện thoại"
                                          className="input-item"
                                       />
                                    </div>
                                    <div className="d-flex mt-2">
                                       <div className="validateMsg">{validateMsg.phone}</div>
                                    </div>
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
                           <div className="d-flex justify-content-between align-items-center">
                              <div className="radio">
                                 <label htmlFor="" className="radio-wrapper checkbox">
                                    <input type="checkbox" />
                                    <span className="checkbox-name">Nhớ mật khẩu</span>
                                 </label>
                              </div>
                              <a href="#/">Quên mật khẩu?</a>
                           </div>
                           <div className="form-item mt-3">
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
                           <div>
                              <Button className="button button--primary" onClick={handleSubmitLogin}>
                                 Đăng Nhập
                              </Button>
                           </div>

                           <div className="text-center mt30 text-register">
                              <strong>Đã chưa tài khoản? </strong>
                           </div>
                           <div className="mt-4 btn-login">
                              <Button className="button button--outline">
                                 <span className="dangkylam">Đăng ký làm </span> <a href="#/"> Giáo viên</a>
                              </Button>
                           </div>
                           <div className="mt-4 btn-login">
                              <Button className="button button--outline">
                                 <span className="dangkylam">Đăng ký làm </span> <a href="#/"> Học viên</a>
                              </Button>
                           </div>
                           <div className="text-center mt-5">
                              <div className="description-register">
                                 Bằng việc chọn đăng ký, bạn đã đồng ý với các
                                 <a href="#/">Điều khoản sử dụng</a> và <a href="#/">Chính sách bảo mật</a> của chúng
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

export default Login;
