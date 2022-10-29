import React from 'react';
import Feature from '../feature/Feature';
import Slider from '../slider/Slider';
import About from '../about/About';

import Map from '../info/map/Map';
import Partner from '../partner/Partner';
import Plan from '../plan/Plan';
import Review from '../review/Review';
import Form from '../info/form/Form';
import Commit from '../info/commit/Commit';
import Waning from '../waning/Warning';

function Main() {
    return (
        <main className="main">
            <Slider />
            <Feature />
            <Plan />
            <Review />
            <Map />
            <Form />
            <Commit />
            <About />
            <Partner />
            <Waning/>
        </main>
    );
}

export default Main;
