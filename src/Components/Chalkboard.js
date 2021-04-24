import React from 'react';

const Chalkboard = ({ items }) => {

    const renderedItems = items.reverse().map((item, index) => {
        return(
            <div className="card" key={item.title}>
                <img src={item.image} alt={item.title} key={item.index} />
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
            </div>
        );
    });

    return (
        <div className="container">
            <h1>Outer Layer Chalkboards</h1>
            <div className="card-container">
                {renderedItems}
            </div>
        </div>
    );
};

export default Chalkboard;
