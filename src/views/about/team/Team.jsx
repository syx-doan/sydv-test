import React from 'react';

import phudao from '~/assets/images/phudao.png';
import phudao2 from '~/assets/images/phudao2.png';
import Button from '~/components/button/Button';
import Text from '~/components/heading/text/Text';
import Heading from '~/components/heading/Heading';
import Check from '../check/Check';
function Team() {
    return (
        <div className="mt-5">
            <div className="team">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Heading>
                                Trở thành giáo viên của
                                <p className="hight-text">Việt Phụ Đạo</p>
                                <Text>
                                    Gia tăng thu nhập và chia sẻ kho tàng tri thức đến học sinh cả nước. Đăng ký để trở
                                    thành giáo viên dạy trực tuyến độc quyền của Việt Phụ Đạo ngay hôm nay
                                </Text>
                            </Heading>
                            <div className="team-sub">
                                <Check/>
                            </div>
                            <div className="btn-team">
                                <Button className="button button--outline">Trở thành giáo viên ngay</Button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={phudao} alt="" />
                        </div>
                    </div>
                    <div className="mt-3 row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <Heading>
                                Luôn có kết quả đánh giá việc dạy và học
                                <Text>
                                    Là nơi học tập của hơn 5,000 học sinh trên khắp cả nước. Tham gia với Việt Phụ Đạo
                                    để nhận được sự giúp đỡ nhiệt tình trong công tác giảng dạy.
                                </Text>
                            </Heading>

                            <div className="btn-team">
                                <Button className="button button--primary">Đăng ký học ngay</Button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={phudao2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
