import React from 'react';

const Caricatures = ({ items }) => {

    const renderedItems = items.reverse().map((item) => {
        return (
            <div className="card" key={item.title}>
                <img src={item.image} alt={item.title} key={item.index} />
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
            </div>
        );
    });

    return (
        <div className="container">
            <h1>Caricatures</h1>
            <div className="gallery-container">
                <div className="card-container">
                    {renderedItems}
                </div>
            </div>
        </div>
    );
};

export default Caricatures;