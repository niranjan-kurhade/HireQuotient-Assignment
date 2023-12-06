import React from 'react';
import '../styles/Fifth.css';
import { Fade } from "react-awesome-reveal";

const Fifth = () => {
    return (
        <div className="third">
            <Fade direction='up' triggerOnce={true}>
                <div className='sections'>
                    <div className='left'>
                        <img src="/notifications.png" alt="" />
                    </div>
                    <div className='right'>
                        <p className='left-text1 center-text1'>Smart Reminders & Task</p>
                        <p className='left-text2'>Never miss an important deadline or event again</p>
                        <p className='left-text-para'>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                        <div className='container'>
                            <div className='relative'>
                                <img src='/face-icon.jpg' className="circular-img" alt="Face Icon" />
                                <div className='bubble'>
                                    <p className='bubble-text'>I've recommended this app to all my friends and colleagues! </p>
                                    <p className='bubble-text'>Karl, CTO of a cool startup</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default Fifth;
