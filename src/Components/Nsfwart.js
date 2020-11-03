import React from 'react';
import zombie from '../assets/done/2018deadicatedZombie.jpg';
import dong from '../assets/done/2020DingDongDickDock.jpg';
import train from '../assets/done/2020TrainOfThought.jpg';
import finger from '../assets/done/2019GetFucked.jpg';

// const Nsfwart = ({ items }) => {

//     const renderedItems = items.map((item, index) => {
//         return (
//             <div className="card">
//                 <img src={item.image} alt={item.description} key={item.index} />
//                 <p className="title">{item.title}</p>
//                 <p className="description">{item.description}</p>
//             </div>
//         );
//     });

//     return (
//         <div className="container">
//             <h1>NSFW Art</h1>
//             <div className="card-container">
//                  {renderedItems}
//             </div>
//         </div>
//     );
// };

const Nsfwart = () => {

    return (
        <div className="container">
            <h1>NSFW Art</h1>
            <div className="card-container">
                <div className="card long">
                    <img src={zombie} alt="2018 Dead-icated to making you moan"/>
                </div>
                <div className="card">
                    <img src={dong} alt="2020 Ding Dong Dick Dock"/>
                </div>
                <div className="card">
                    <img src={train} alt="2020 Train of Thought"/>
                </div>
                <div className="card long">
                    <img src={finger} alt="2019 Get Fucked"/>
                </div>
            </div>
        </div>
    );
};

export default Nsfwart;