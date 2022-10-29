import React from 'react';
import './IntroItem.scss';
import toanhoc from '~/assets/images/toanhoc.png';
import tiengviet from '~/assets/images/tiengviet.png';
import ngoaingu from '~/assets/images/ngoaingu.png';
import vatli from '~/assets/images/vatli.png';
import hoahoc from '~/assets/images/hoahoc.png';
import sinhhoc from '~/assets/images/toanhoc.png';

function IntroItem() {
    const courses = [
        {
            title: 'Toán Học',
            quantity: 359,
            logo: toanhoc,
        },
        {
            title: 'Tiếng Việt',
            quantity: 266,
            logo: tiengviet,
        },
        {
            title: 'Ngoại Ngữ',
            quantity: 520,
            logo: ngoaingu,
        },
        {
            title: 'Vật Lí',
            quantity: 359,
            logo: vatli,
        },
        {
            title: 'Hóa Học',
            quantity: 231,
            logo: hoahoc,
        },
        {
            title: 'Sinh Học',
            quantity: 178,
            logo: sinhhoc,
        },
    ];
    return (
        <>
            {courses.map((course, index) => (
                <div className="col-lg-4 col-6 mb-4 gap30"  key={index}>
                    <div className="intro-item d-flex alight-item-center">
                        <div className="intro-icon">
                            <img src={course.logo} alt="" />
                        </div>
                        <div className="intro-info">
                            <h4 className="intro-title">{course.title}</h4>
                            <span className="intro-text">{course.quantity} + Giáo viên</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default IntroItem;
