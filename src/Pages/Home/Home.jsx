import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import RecentQueries from './Recent-Queries/RecentQueries';
import WhyChoose from './WhyChoose/WhyChoose';
import WhatYouGet from './WhatYouGet/WhatYouGet';

const Home = () => {

    useEffect(() => {
        document.title = "Home | RecSyS";
      }, []);


    return (
        <div>
            <Hero></Hero>
            <RecentQueries></RecentQueries>
            <WhyChoose></WhyChoose>
            <WhatYouGet/>
        </div>
    );
};

export default Home;