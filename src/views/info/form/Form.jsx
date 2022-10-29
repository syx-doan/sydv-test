import React from 'react';
import './Form.scss';
import giaodien from '~/assets/images/giaodien.png';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import Button from '~/components/button/Button';
function Form() {
    return (
        <section className="form-contact">
            <div className="container">
                <div className="row align-items-center pb-4">
                    <div className="col-lg-6 ">
                        <img src={giaodien} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="content-contact">
                            <Heading>
                                Để lại thông tin cho chúng tôi
                                <Text>
                                    Bạn muốn cho con học tập hoặc muốn giảng dạy mà vẫn còn nhiều vấn đề đang thắc mắc,
                                    hãy để lại thông tin. Chúng tôi sẽ liên hệ và giải đáp thắc mắc của bạn.
                                </Text>
                            </Heading>
                        </div>
                        <form className="form-status">
                            <input type="text" className="input-name" placeholder="Nhập tên của bạn" />
                            <input type="text" className="input-number" placeholder="Nhập số điện thoại" />
                            <textarea className="area-status" placeholder="Nhập nội dung phản hồi của bạn"></textarea>
                            <Button className="button button--primary"> Gửi đi</Button>
                        </form>
                    </div>
                </div>
            </div>
           
        </section>
    );
}

export default Form;
