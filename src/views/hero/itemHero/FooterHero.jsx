import React from 'react';
import './ItemHero.scss';
import tongket from '~/assets/images/tongket.png';

function FooterHero() {
    return (
        <div className="hero-end mt30">
            <div className="image-end">
                <img src={tongket} alt="" />
            </div>

            <div className="info-end mt-5 text-center">
                <span>
                    Chuyên viên tư vấn giáo dục của chúng tôi sẽ giải thích kết quả chuẩn đoán và đề xuất bước tiếp theo
                    để giúp con bạn cải thiện{' '}
                </span>
            </div>
        </div>
    );
}

export default FooterHero;
