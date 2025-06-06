import React from 'react';
import Hero from './Hero/Hero';
import RecentQueries from './Recent-Queries/RecentQueries';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <RecentQueries></RecentQueries>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;