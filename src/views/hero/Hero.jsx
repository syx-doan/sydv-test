import React from 'react';
import './Hero.scss';

import Button from '~/components/button/Button';
import Heading from '~/components/heading/Heading';
import Text from '~/components/heading/text/Text';
import ItemHero from './itemHero/ItemHero';
import FooterHero from './itemHero/FooterHero';

function Hero() {
    return (
        <section className="Hero">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <Heading className="mt30 text-center mb30">
                            <Text>
                                Tham gia <span className="hight-text"> Việt Phụ Đạo với</span> với
                            </Text>
                            BUỔI ĐÁNH GIÁ & HỌC THỬ
                            <span className="hight-text"> MIỄN PHÍ</span>
                        </Heading>
                    </div>
                </div>
                <div className="row">
                    <ItemHero />
                </div>

                <div className="mt30 d-flex align-items-center justify-content-center">
                    <Button className="button button--primary">Đăng ký ngay</Button>
                </div>
                <FooterHero />
            </div>
        </section>
    );
}

export default Hero;
