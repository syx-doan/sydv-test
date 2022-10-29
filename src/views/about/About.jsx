import React from 'react';
import './About.scss';
import Heading from '~/components/heading/Heading';
import AboutItem from './aboutItem/About';
import Team from './team/Team';

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-2">
                        <Heading className="about-header">
                            Mọi người nói gì về <span className="hight-text">Việt Phụ Đạo</span>
                        </Heading>
                    </div>
                </div>
                <div className="row mt-5">
                    <AboutItem />
                </div>
                <Team />
            </div>
        </section>
    );
}

export default About;
