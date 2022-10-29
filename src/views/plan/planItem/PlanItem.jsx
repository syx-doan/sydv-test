import React from 'react';
import './Plamitem.scss';
import map from '~/assets/images/map.png';
import map2 from '~/assets/images/map2.png';
import map3 from '~/assets/images/map3.png';

function PlanItem() {
    const planItems = [
        {
            id: 1,
            img: map,
            title: 'Học bất cứ khi nào, bất cứ nơi đâu',
            subTitle:
                'Tất cả các môn học đều có trên Việt Phụ Đạo, bạn hoàn toàn có thể tiếp cận đến giáo trình tốt cũng như giáo viên giỏi mà không cần ra khỏi nhà',
        },
        {
            id: 2,
            img: map2,
            title: 'Giáo viên giàu kinh nghiệm dạy trực tuyến',
            subTitle:
                'Đội ngũ giáo viên Việt Phụ Đạo được đào tạo chuyên sâu về công cụ và kỹ năng dạy trực tuyến, giúp lớp học được diễn ra một cách hấp dẫn và chuyên nghiệp',
        },
        {
            id: 3,
            img: map3,
            title: 'Ôn tập dễ dàng, cha mẹ đồng hành',
            subTitle:
                'Xem lại từng buổi học bất cứ lúc nào. Giúp học sinh dễ dàng ôn tập cũng như giúp cha mẹ đồng hành cùng con trong quá trình học tập.',
        },
    ];

    return (
        <>
            {planItems.map((planItem) => (
                <div className="col-lg-4 mb30" key={planItem.id}>
                    <div className="plan-item align-items-center flex-column d-flex " key={planItem.id}>
                        <div className="plan-image">
                            <img src={planItem.img} alt="" />
                        </div>

                        <div className="plan-details">
                            <h3 className="plan-title">{planItem.title}</h3>
                            <span className="plan-info">{planItem.subTitle}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PlanItem;
