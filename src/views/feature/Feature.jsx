import React from 'react';
import './Feature.scss';

import iconRight from '~/assets/icons/right.svg';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import IntroItem from './introItem/IntroItem';

function Feature() {
    return (
        <section className="feature">
            <div className="container">
                <div className="row ">
                    <div className="ms col-lg-10 offset-lg-1 text-center">
                        <Heading className='heading' >Tìm Kiếm Giáo viên Phù Hợp</Heading>
                        <Text>5130+ giáo viên giàu kinh nghiệm từ các trường điểm và trường chuyên trên toàn quốc</Text>
                    </div>
                </div>
                <div className="row mt-30">
                    <IntroItem />
                </div>
                <div className="footer-feature mt-3">
                    <h5>Xem Thêm Các Khóa Học</h5>
                    <img src={iconRight} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Feature;
