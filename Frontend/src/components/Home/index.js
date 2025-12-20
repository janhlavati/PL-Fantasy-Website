import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Loadert from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = "Welcome to".split('');
    const jobArray = "Premier Zone Fantasy".split('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container-home-page">
                <div className="text-zone">
                    <h1>
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray} idx={12} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray} idx={15} />
                    </h1>
                    <h2>Your Ultimate Fantasy Football Experience</h2>
                    <Link to="/teams" className="flat-button">Get Started</Link>
                </div>
            </div>
            <Loadert type="pacman" />
        </>
    )
}

export default Home;