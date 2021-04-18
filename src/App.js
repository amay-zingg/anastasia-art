import React from 'react';
import './App.scss';
import hero from './assets/Hero.jpg'

import Chalkboard from './Components/Chalkboard';
import Caricatures from './Components/Caricatures';
// import Costumes from './Components/Costumes';
// import Paintings from './Components/Paintings';
// import Nsfwart from './Components/Nsfwart';

// import Route from './Components/Route';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header';
import chalkboardArt from './imageLists/chalkboardList';
import caricatureArt from './imageLists/caricatureList';
// import paintingArt from './imageLists/paintingList';
// import costumes from './imageLists/costumeList';
// import nsfwArt from './imageLists/nsfwList';

// GSAP
// import SimpleTween from "./simpleTween.js";
// import artistIntro from './artistIntro.js';


// * * * * If having troubles 
// https://hugogiraudel.com/2017/05/13/using-create-react-app-on-netlify/

export default () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <Route exact path={'/'}> */}
                    <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <div className="hero-container">
                            <img src={hero} alt="Hero"/>
                        </div>
                        <main>
                            <h2 className="hello">Hello! <span className="waving">👋</span></h2>
                            <p className="artist-intro">I work on character paintings a few times a year and have had my work in the Super Wonder Gallery several times. I create original caricatures in a few different cartoon art styles or my own. For 6 years I have done the chalk art outdoor sign at Outer Layer in Toronto. </p>
                            {/* <artistIntro /> */}
                            {/* <SimpleTween /> */}
                        </main>
                    </Route>
                    <Route path="/chalkboards">
                        <Chalkboard items={chalkboardArt} />
                    </Route>
                    <Route path="/caricatures">
                        <Caricatures items={caricatureArt} />
                    </Route>
                    {/* <Route path="/paintings">
                        <Paintings items={paintingArt}/>
                    </Route>
                    <Route path="/costumes">
                        <Costumes items={costumes}/>
                    </Route>
                    <Route path="/nsfwart">
                        <Nsfwart items={nsfwArt}/>
                    </Route> */}
                </div>
            </BrowserRouter>
            <footer>
                <p>© 2021 <a href="http://www.anastasiamay.com">Anastasia May</a></p>
            </footer>
        </div>
    );
};


