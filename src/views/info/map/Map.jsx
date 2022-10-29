import React from 'react';
import './map.scss';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';

function Map() {
    return (
        <section className="bg-map">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-5 col-lg-7">
                        <Heading className="info-title">
                            Hơn <span className="hight-text">5000 +</span> Giáo viên và học sinh cùng tham gia Việt Phụ
                            Đạo
                            <Text>
                                Đồng hành cùng những giáo viên giỏi, mục tiêu điểm{' '}
                                <span className="hight-text">9,10 </span> gần hơn bao giờ hết
                            </Text>
                        </Heading>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;
