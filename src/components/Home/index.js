import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Vantabg from './Vanta'
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'ayro,'.split("");
    const jobArray = 'web developer.'.split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _13`}>’</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoJ} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>Full Stack Developer / PHP Expert / Javascript Expert</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Vantabg />
        </div>
        <Loader type="pacman" />
        </>
    )

}
export default Home