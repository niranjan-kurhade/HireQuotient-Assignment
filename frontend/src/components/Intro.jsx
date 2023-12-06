import React from 'react';
import '../styles/Intro.css';
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <div className="intro">
            <Fade direction='up' triggerOnce={true}>
                <div className="center">
                    <p className='center-text1'>An other way to manage time</p>
                    <p className='center-text2'>Your new favorite</p>
                    <p className='center-text2'>calendar <span className='cal-icon'>🗓️</span> app</p>
                    <div className='encap'>
                        <p className='center-text3'>Here you should explain how cool your app is. Remember, </p>
                        <p className='center-text3'>focus on the benefits for your users, not on the features. </p>
                    </div>
                    <button className='center-button'>Get Started, it's free</button>
                    <p className='free-trial-text'>Free 14 days trials,no credit card needed</p>
                </div>
                <div className="circles-and-stars-wrapper">
                    <div className="circles-and-stars">
                        <div className="circles">
                            <img src='/face-icon.jpg' alt="Image 1" className="face-img" />
                            <img src='/face-icon.jpg' alt="Image 2" className="face-img" />
                            <img src='/face-icon.jpg' alt="Image 3" className="face-img" />
                            <img src='/face-icon.jpg' alt="Image 4" className="face-img" />
                            <img src='/face-icon.jpg' alt="Image 5" className="face-img" />
                        </div>
                        <div className='star-section'>
                            <div className="stars">
                                <span className="star">⭐</span>
                                <span className="star">⭐</span>
                                <span className="star">⭐</span>
                                <span className="star">⭐</span>
                                <span className="star">⭐</span>
                                <p>5.0</p>
                            </div>
                            <p className='p200'>From 200+ happy users</p>
                        </div>
                    </div>
                </div>
                <img src='/ui.png' className='ui-image' />
            </Fade>
        </div >
    );
};

export default Intro;
