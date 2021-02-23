import React from 'react';
import './App.scss';
import hero from './assets/Hero.jpg'

import Chalkboard from './Components/Chalkboard';
import Caricatures from './Components/Caricatures';
import Costumes from './Components/Costumes';
import Paintings from './Components/Paintings';
import Nsfwart from './Components/Nsfwart';

// import Route from './Components/Route';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header';
import chalkboardArt from './imageLists/chalkboardList';
import caricatureArt from './imageLists/caricatureList';

// * * * * If having troubles 
// https://hugogiraudel.com/2017/05/13/using-create-react-app-on-netlify/

export default () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <Route exact path={'/'}> */}
                    <Route exact path={process.env.PUBLIC_URL + '/anastasia-art'}>
                        <img src={hero} alt="Hero"/>
                    </Route>
                    <Route path="/chalkboards">
                        <Chalkboard items={chalkboardArt} />
                    </Route>
                    <Route path="/caricatures">
                        <Caricatures items={caricatureArt} />
                    </Route>
                    <Route path="/paintings">
                        <Paintings />
                    </Route>
                    <Route path="/costumes">
                        <Costumes />
                    </Route>
                    <Route path="/nsfwart">
                        <Nsfwart />
                    </Route>
                </div>
            </BrowserRouter>
        </div>
    );
};


