import React from 'react';
import './AboutItem.scss';

import daungoac from '~/assets/icons/daungoac.png';
import phuhuynh from '~/assets/images/phuhuynh.png';
import phuhuynh2 from '~/assets/images/phuhuynh2.png';
import phuhuynh3 from '~/assets/images/phuhuynh3.png';

function AboutItem() {
    const abouItems = [
        {
            id: 1,

            description:
                ' Tôi có con gái 4 tuổi, để chuẩn bị cho cháu vào lớp 1 thì tôi rất muốn dạy cháu những kiến thức cơ bản, những kỹ năng mềm nhưng lại không biết tìm lộ trình học bài bản ở đâu. Thật may tôi đã có Việt Phụ Đạo giúp đỡ.',
            avatar: phuhuynh,
            name: ' Chị Nguyễn Thùy Linh',
            job: 'Phụ huynh - Nội trợ',
        },
        {
            id: 2,

            description:
                ' Cháu nhà tôi năm nay học lớp 2, mỗi ngày đi học về tôi thấy cháu được giao rất nhiều bài tập, tuy chỉ là những phép tính cộng trừ đơn giản nhưng tôi không có thời gian dạy cháu. Việt Phụ Đạo đã giúp tôi giải quyết vấn đề này.',
            avatar: phuhuynh2,
            name: 'Anh Nguyễn Tùng Sơn',
            job: 'Phụ huynh học sinh',
        },
        {
            id: 3,

            description:
                'Con tôi năm nay học lớp 8, chỉ còn một năm nữa là bước vào kì thi tuyển sinh cấp 3, tôi muốn tìm cho con một giáo viên có nghiệp vụ, tâm huyết để dạy và truyền động lực học cho cháu, và tôi đã tìm thấy trong Việt Phụ Đạo.',
            avatar: phuhuynh3,
            name: 'Chị Nguyễn Bảo Ngọc',
            job: 'Phụ huynh - Chuyên viên Bảo hiểm',
        },
    ];
    return (
        <>
            {abouItems.map((aboutItem,index) => (
                <div key={index} className="col-lg-4">
                    <div className="about-item d-flex align-items-center flex-column">
                        <div className="about-icon">
                            <img src={daungoac} alt="" />
                        </div>
                        <p className="about-description">{aboutItem.description}</p>
                        <div className="about-avatar">
                            <img src={aboutItem.avatar} alt="" />
                        </div>
                        <div className="about-details">
                            <h5>{aboutItem.name}</h5>
                            <p>{aboutItem.job}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AboutItem;
