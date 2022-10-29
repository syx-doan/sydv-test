import React from 'react';
import './ItemHero.scss';
import lich1 from '~/assets/images/lich1.png';
import lich2 from '~/assets/images/lich2.png';
import lich3 from '~/assets/images/lich3.png';

function ItemHero() {
    const items = [
        {
            id: 1,
            img: lich1,
            description: 'Đăng ký buổi học thử miễn phí với chuyên viên tư vấn giáo dục',
        },
        {
            id: 2,
            img: lich2,
            description: 'Làm bài đánh giá năng lực tổng quát và tham gia buổi học thử miễn phí',
        },
        {
            id: 3,
            img: lich3,
            description:
                'Nhận được bản báo cáo và phân tích năng lực, thiên hướng, định hướng nghề nghiệp phù hợp ngay tức thì',
        },
    ];
    return (
        <>
            {items.map((item) => (
                <div className="col-lg-4 text-center hero-item" key={item.id}>
                    <div className="hero-image">
                        <img src={item.img} alt="" />
                    </div>

                    <div className="hero-info">
                        <span>{item.description}</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ItemHero;
