import React from 'react';
import './Check.scss';
import check from '~/assets/icons/check.svg';

function Check() {
    const checkItems = [
        {
            sub: 'Đảm bảo thu nhập',
        },
        {
            sub: 'Tìm những học sinh mới',
        },
        {
            sub: ' Cháy hết mình với đam mê',
        },
    ];
    return (
        <div>
            {checkItems.map((item, index) => (
                <h5 key={index}>
                    <img src={check} alt="" /> {item.sub}
                </h5>
            ))}
        </div>
    );
}

export default Check;
