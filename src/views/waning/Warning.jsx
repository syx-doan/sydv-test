import React from 'react';
import './warning.scss';
import Button from '~/components/button/Button';

function Waning() {
    return (
        <div className="warning">
            <div className="container">
                <h5>Trở thành giáo viên để dạy hàng nghìn học sinh tại Việt Phụ Đạo</h5>
                <div className="btn-footer ">
                    <Button className="button button--outline">Trở thành giáo viên ngay</Button>
                </div>
            </div>
        </div>
    );
}

export default Waning;
