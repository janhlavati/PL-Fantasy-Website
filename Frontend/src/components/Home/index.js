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
                <div className="text-zone">
                    <h1 style={{textAlign: 'center', fontSize: '24px'}}>Your Ultimate Fantasy Football Experience</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', marginTop: '20px', fontSize: '18px'  }}>
                        <Link to="/teams" className="flat-button">Get Started</Link>
                    </div>
                </div>
            </div>
            <Loadert type="pacman" />
        </>
    )
}

export default Home;