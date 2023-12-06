import React, { useEffect } from 'react';
import "../styles/Seventh.css";

const Seventh = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div>
            <div className="seventh">
                <div className="center">
                    <p className='center-text1'>They already love our products 😍</p>
                    <p className='feed-text'>See what our users say about us</p>
                </div>
            </div>
            <div className="scroller" data-speed="fast">
                <div className="tag-list scroller__inner">
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                </div>
            </div>

            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                </div>
            </div>

            <div className="scroller" data-speed="fast">
                <div className="tag-list scroller__inner">
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                    <img src="/scroll-img.png" className='scroll-img' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Seventh;
