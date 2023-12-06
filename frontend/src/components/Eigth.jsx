import React from 'react';
import '../styles/Eigth.css';
import { Fade } from "react-awesome-reveal";

const Eigth = () => {
    return (
        <div className="eigth">
            <Fade direction='up' triggerOnce={true}>
                <div className="center">
                    <p className='center-text1'>Pricing and plans 💰</p>
                    <p className='pricing-text'>Find the best plan for your needs</p>
                </div>

                <div className="cards">
                    <div className="card1">
                        <p className='tag'>Free</p>
                        <p className='gray-text'>So you can see how incredible our tool is. </p>
                        <p className='price'>$0<span className='per-mo'>/mo</span></p>
                        <p className='m-text'>Free forever</p>
                        <button className='button-get'>Get Started</button>
                        <p className='small-text'>No Credit Card needed</p>
                        <p className='text-ok'>What's included:</p>
                        <p className='text'>⚡A cool feature</p>
                        <p className='text'>⚡A basic feature</p>
                        <p className='text'>⚡A top feature with limitations</p>
                        <p className='text'>⚡An incredible feature so useful</p>
                        <p className='text'>⚡A top feature</p>
                    </div>
                    <div className="card2">
                        <p className='tag'>Starter</p>
                        <p className='gray-text'>So you can see how incredible our tool is. </p>
                        <p className='price'>$0<span className='per-mo'>/mo</span></p>
                        <p className='m-text'>Billed monthly</p>
                        <button className='button-get'>Get Started</button>
                        <p className='small-text'>7 days free trial no credit card needed</p>
                        <p className='text-ok'>What's included:</p>
                        <p className='text'>🔥A cool feature</p>
                        <p className='text'>🔥A basic feature</p>
                        <p className='text'>🔥A top feature with limitations</p>
                        <p className='text'>🔥An incredible feature so useful</p>
                        <p className='text'>🔥A top feature</p>
                    </div>
                    <div className="card3">
                        <p className='tag'>Pro</p>
                        <p className='gray-text'>So you can see how incredible our tool is. </p>
                        <p className='price'>$0<span className='per-mo'>/mo</span></p>
                        <p className='m-text'>Billed monthly</p>
                        <button className='button-get'>Get Started</button>
                        <p className='small-text'>7 days free trial no credit card needed</p>
                        <p className='text-ok'>What's included:</p>
                        <p className='text'>🚀A cool feature</p>
                        <p className='text'>🚀A basic feature</p>
                        <p className='text'>🚀A top feature with limitations</p>
                        <p className='text'>🚀An incredible feature so useful</p>
                        <p className='text'>🚀A top feature</p>
                    </div>
                </div>
            </Fade>
        </div>


    );
};

export default Eigth;
