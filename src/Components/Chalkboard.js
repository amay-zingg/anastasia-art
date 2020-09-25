import React from 'react';

const Chalkboard = ({ items }) => {

    const renderedItems = items.map((item, index) => {
        return(
            <div className="chalkboard-card">
                <img src={item.image} alt={item.title} key={index} />
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
            </div>
        );
    });

    return (
        <div className="chalkboard-container">
            <h1>Outer Layer Chalkboards</h1>
            <div className="chalkboard-card-container">
                {renderedItems}
            </div>
        </div>
    );
};

export default Chalkboard;