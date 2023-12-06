import React from 'react';
import '../styles/Second.css';
import { Fade } from "react-awesome-reveal";

const Second = () => {
    return (
        <div className="second">
            <div className="center">
                <p className='center-text1'>Our main features 🦸🏼</p>
                <p className='center-text22'>Discover your new superpowers</p>
            </div>

            <div className='sections'>
                <Fade direction='up' triggerOnce={true}>
                    <div className='leftt'>
                        <p className='left-text1'>Seamless Scheduling</p>
                        <p className='left-text2'>Focus on what matters most for you</p>
                        <p className='left-text-para'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                        <div className='containerr'>
                            <div className='relativee'>
                                <img src='/face-icon.jpg' className="circular-imgg" alt="Face Icon" />
                                <div className='bubblee'>
                                    <p className='bubble-text'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</p>
                                    <p className='bubble-text'>Carla, Head of Finance </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='righttt'>
                        <img src="/calendar.png" alt="" className='cal-img' />
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Second;
