import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover') 
        }, 4000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_g4o0qzf',
                'template_hh4o4ek',
                refForm.current,
                'maBMEpVt2isXbL1pK'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message. Please try again.');
                }
            )
    }

    

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray = {'Contact me'.split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or 
                        large projects. However, if you have other request or question, 
                        don't hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Jayro Gabriel,
                    <br />
                    Philippines
                    <br />
                    #4 Looban St. Angeles, <br />
                    Pampanga <br />
                    <span>gabriel.jayro26@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[15.16167653623541, 120.59030557969396]} zoom={18}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[15.16167653623541, 120.59030557969396]}>
                        <Popup>Jayro lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                    </MapContainer>
                </div>
                
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact