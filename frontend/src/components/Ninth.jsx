import React from 'react';
import '../styles/Ninth.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Fade } from "react-awesome-reveal";
const Ninth = () => {

    const items = [
        {
            header: 'Can I cancel my subscrition?',
            content: 'You can cancel your plan whenever youd like. Youll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
        },
        {
            header: 'What happens when my trial ends?',
            content: 'When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.'
        },
        {
            header: 'What payment methods do you offer?',
            content: 'We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.'
        },
        {
            header: 'What is your refund policy?',
            content: 'Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the "Help" section in your account or email us at support@Milton.com, and well be happy to assist you.'
        },
        {
            header: 'Do you offer discounts to educational institutions ?',
            content: 'Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institutions details, and we will provide you with more information on our exclusive educational pricing options.'
        }
    ];

    return (
        <div className="ninth">
            <Fade direction='up' triggerOnce={true}>
                <div className="center">
                    <p className='center-text1'>Relevant stuff, bla bla 📣</p>
                    <p className='faq-text'>Frequently asked questions</p>
                </div>
                <div>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What happens when my trial ends?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    You can cancel your plan whenever youd like. Youll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What happens when my trial ends?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What happens when my trial ends?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    You can cancel your plan whenever youd like. Youll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What happens when my trial ends?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='test'>
                                <p>
                                    When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Fade>
        </div>
    );
};

export default Ninth;
