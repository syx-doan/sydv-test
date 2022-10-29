import React from 'react';
import './Plan.scss';
import Text from '~/components/heading/text/Text';
import Heading from '~/components/heading/Heading';
import PlanItem from './planItem/PlanItem';

function Plan() {
    return (
        <section className="plan">
            <div className="container">
                <div className="row ">
                    <div className="ms col-lg-10 offset-lg-1 text-center">
                        <Heading className="plan-header">
                            Nền tảng dạy Phụ đạo Trực tuyến <p className="hight-text">#1 Việt Nam</p>
                            <Text>Học trực tuyến như học trực tiếp</Text>
                        </Heading>
                    </div>
                </div>

               <div className='row mt-5'>
                   
                        <PlanItem />
                   
               </div>
            </div>
        </section>
    );
}

export default Plan;
