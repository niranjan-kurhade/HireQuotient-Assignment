import React, { useState, useEffect } from 'react';
import Card from './Card';
import cardData from '../assets/cardData';
import "../styles/CardComp.css";

const CardComp = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardData);
    }, []);

    return (
        <div className="card-container">

            {cards.map((card) => (
                <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardComp;
