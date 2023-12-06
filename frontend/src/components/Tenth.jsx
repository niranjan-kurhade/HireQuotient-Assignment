import React from 'react';
import '../styles/Tenth.css';
import { Fade } from "react-awesome-reveal";

const Tenth = () => {
    return (
        <div className="tenth">
            <Fade direction='up' triggerOnce={true}>
                <div className="center">
                    <p className='center-text1'>Last call Baby! 🚀</p>
                    <p className='rts-text'>Ready to start?</p>
                    <p className='center-text3'>Here is your last chance to explain how cool your app is.</p>
                    <p className='center-text3'>Focus on the benefits for your users, not on the features. </p>
                    <button className='center-button'>Get Started, it's free</button>
                </div>
            </Fade>
        </div>
    );
};

export default Tenth;
