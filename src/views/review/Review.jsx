import React from 'react';
import './Review.scss';
import Hero from '../hero/Hero';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import ReviewItem from './reviewItem/ReviewItem';

function Review() {
    return (
        <section className="review">
            <div className="container">
                <div className="row ">
                    <div className="ms col-lg-10 offset-lg-1 text-center">
                        <Heading className="review-header">
                            Trợ lý học tập
                            <span className="hight-text"> trí tuệ nhân tạo AI</span>
                            <Text>
                                Thiết kế bài học hằng ngày riêng biệt cho từng học sinh, lộ trình đảm bảo sự tiến bộ
                            </Text>
                        </Heading>
                    </div>
                </div>
                <ReviewItem />
            </div>
            <Hero />
        </section>
    );
}

export default Review;
