import React from 'react';
import Button from '~/components/button/Button';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import './Slide.scss';


function Slider() {
    return (
        <div className="slider">
            <div className='container'> 
                <div className="content">
                    <Heading>Lớp học Phụ đạo Trực tuyến</Heading>
                    <Text className="text">
                        Học phụ đạo các môn học, các khối lớp với thầy cô giàu kinh nghiệm bất cứ khi nào và bất cứ nơi đâu
                    </Text>
                    <Button className="button button--primary">Lớp học thử miễn phí</Button>
                </div>
            </div>
        </div>
       
    );
}

export default Slider;
