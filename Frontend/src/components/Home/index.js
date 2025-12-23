import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loadert from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container-home-page">
                <div className="text-zone" style={{textAlign: 'center'}}>
                    <b><h1 style={{display: 'inline-block', borderRadius: '30px', marginBottom: '110px', padding: '10px', fontSize: '48px', backgroundColor: '#100035ff'}}>Premier League Fantasy</h1></b>
                    <Link to="/teams" className="flat-button" style={{ display: 'flex', justifyContent: 'center', color: 'black', fontSize: '18px', font: 'caption', color: '#ffffffff'}}>Get Started</Link>
                </div>
            </div>
            <Loadert type="pacman" />
        </>
    )
}

export default Home;