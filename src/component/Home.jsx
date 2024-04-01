import React from 'react';
import Menubar from './Menubar';
import MouseOneHtml from './MouseOneHtml';
import '../scss/home.scss';
import FritsText from './FritsText';
import About from './About';
import { useLocation } from 'react-router-dom';
import topscroll from '../jsjs/topscroll';



function Home(props) {

    const locate =  useLocation();
    topscroll(locate.state);


    return (
        <div className='homescss'>
            <Menubar />
            <MouseOneHtml />
            <FritsText />
            <About />
        </div>
    );
}

export default Home;