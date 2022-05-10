import React from 'react';
import Feedback from '../Feedback/Feedback';
import Prebook from '../Prebook/Prebook';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';

import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Prebook></Prebook>
            <Feedback></Feedback>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;