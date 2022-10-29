import React from 'react';
import './Partner.scss';
import thanhtoan from '~/assets/images/doitacthanhtoan.png';
import giaoduc from '~/assets/images/doitacgiaoduc.png';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';

function Partner() {
    return (
        <section className="partner">
            <div className="container">
                <div className="row mt25">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <Heading className="partner-title">Đối tác thanh toán</Heading>
                        <Text>
                            Chúng tôi đang hợp tác với các nhà cung cấp dịch vụ thanh toán đáng tin cậy nhất để đảm bảo
                            mọi giao dịch diễn ra suôn sẻ và không phải lo lắng.
                        </Text>
                    </div>
                </div>
                <div className="mt-3 mb30">
                    <div className="partner-img text-center">
                        <img src={thanhtoan} alt="" />
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-4">
                    <hr className="dot-partner" />
                </div>
                <div className="row mt25">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <Heading className="partner-title"> Đối tác giáo dục</Heading>
                        <Text>
                            Chúng tôi đang hợp tác với các chuỗi trường liên cấp, trường chuyên tại Miền Bắc để đảm bảo
                            học sinh có được những giáo trình chuẩn nhất.
                        </Text>
                    </div>
                </div>
                <div className="mt-3 mb30">
                    <div className="partner-img text-center">
                        <img src={giaoduc} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;
