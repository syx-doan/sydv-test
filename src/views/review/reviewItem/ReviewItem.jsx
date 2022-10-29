import React from 'react';
import './ReviewItem.scss';
import manhinh1 from '~/assets/images/manhinh1.png';
import manhinh2 from '~/assets/images/manhinh2.png';
import manhinh3 from '~/assets/images/manhinh3.png';
import who from '~/assets/images/who.png';
import who1 from '~/assets/images/who1.png';
import who2 from '~/assets/images/who2.png';
import elip from '~/assets/icons/elip.svg';

function ReviewItem() {
    const reviewItems = [
        {
            id: 1,
            avatar: who,
            img: manhinh1,
            title: '“Con tôi đã biết phải học tập trung vào phần nào"',
            name: 'Anh Thái Sơn',
            relationship: 'Phụ huynh học sinh',
            job: 'Cá nhân hóa học tập với công nghệ A.I',
            subJob: [{ sub: 'Bám sát nội dung bộ giáo dục' }, { sub: ' Hơn 100.000 câu hỏi và lời giải chi tiết' }],
        },
        {
            id: 2,
            avatar: who1,
            img: manhinh2,
            title: '“Con cảm giác như đang được ngồi học trực tiếp với cô"',
            name: 'Hà Trang',
            relationship: '15 tuổi - Học sinh THCS',
            job: 'Lớp học trực tuyến với công cụ trực quan',
            subJob: [
                { sub: 'Nền tảng dành riêng dạy học' },
                { sub: ' Công cụ giảng dạy hiện đại' },
                { sub: 'Tương tác 2 chiều trên bảng' },
            ],
        },
        {
            id: 3,
            avatar: who2,
            img: manhinh3,
            title: '“Thật dễ dàng để tôi nhận ra con tiến bộ hằng ngày"',
            name: 'Chị Mai Chinh',
            relationship: 'Phụ huynh học sinh',
            job: 'Cập nhật kết quả theo thời gian thực',
            subJob: [
                { sub: 'Theo dõi trực tiếp quá trình phát triển của con' },
                { sub: 'Đánh giá chi tiết theo từng chủ đề các môn' },
            ],
        },
    ];
    return (
        <>
            {reviewItems.map((reviewItem, index) => (
                <div
                    key={reviewItem.id}
                    className={`row align-items-center who-container who-container-position${index}`}
                >
                    <div className="col-lg-6">
                        <div className="who-info">
                            <div className="avatar-reviews">
                                <img src={reviewItem.avatar} alt="" />
                            </div>
                            <div>
                                <h4 className="title-reviews">{reviewItem.title}</h4>

                                <p className="name">{reviewItem.name}</p>
                                <p className="norm">{reviewItem.relationship}</p>
                            </div>
                        </div>

                        <div className="list-sub-reviews">
                            <h3 className="sub-text">{reviewItem.job}</h3>
                            {reviewItem.subJob.map((item2, index) => (
                                <p className="item-sub-reviews" key={index}>
                                    <img className="dot-reviews" src={elip} alt="" />
                                    {item2.sub}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={reviewItem.img} alt="" />
                    </div>
                    <div className="row mt30 mb30">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ReviewItem;
