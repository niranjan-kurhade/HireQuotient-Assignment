import React from 'react';
import '../styles/Fourth.css';
import { Fade } from "react-awesome-reveal";

const Fourth = () => {
    return (
        <div className="fourth">
            <Fade direction='up' triggerOnce={true}>
                <div className='sections'>
                    <div className='leftt'>
                        <p className='left-text1 center-text1'>Seamless Scheduling</p>
                        <p className='left-text2'>Focus on what matters most for you</p>
                        <p className='left-text-para'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                        <div className='containerr'>
                            <div className='relativee'>
                                <img src='/face-icon.jpg' className="circular-imgg" alt="Face Icon" />
                                <div className='bubblee'>
                                    <p className='bubble-text'>I've tried a lot of calendar apps, but this one is by far the best! </p>
                                    <p className='bubble-text'>Annie, Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rightt'>
                        <img src="/tracking.png" alt="" />
                    </div>
                </div>
            </Fade >
        </div>
    );
};

export default Fourth;
