import React from 'react';
import './commit.scss';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';

import commit from '~/assets/images/commit.png';
function Commit() {
    return (
        <section className="commit">
            <div className="container">
                <div className="wrapper-img">
                    <div className="commit-img">
                        <img src={commit} alt="" />
                    </div>
                </div>
                <div className='row'>
                   <div className='col-lg-6 offset-lg-3'>
                        <Heading className="hight-text text-center">
                            Cam kết 100% hài lòng
                            <Text>
                                Nếu bạn không hài lòng với buổi học thử, chúng tôi sẽ tặng miễn phí cho bạn lớp học mới với giáo
                                viên khác hoặc hoàn tiền 100%
                            </Text>
                        </Heading>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default Commit;
