import React from 'react';

const Costumes = ({ items }) => {

    const renderedItems = items.map((item, index) => {
        return(
            <div className="card" key={item.title}>
                <img src={item.image} alt={item.description} key={item.index} />
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
            </div>
        );
    });

    return (
        <div className="container">
            <h1>Costumes!</h1>
            <div className="card-container">
                {renderedItems}
            </div>
        </div>
    );
};

export default Costumes;
