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

function clickEmail(e) {
    e.preventDefault();
    window.location.href = this.attr('href').replace('myemail', 'gmail');

};

export default () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <Route exact path={'/'}> */}
                    <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <div className="hero-container">
                            <img src={hero} alt="Hero" />
                        </div>
                        <main>
                            <div className="intro-box">
                                <h2 className="hello">Heya I'm Anastasia! <span className="waving"><span role="img" aria-label="waving hand">👋</span>
                                </span></h2>
                                <p>I'm primarily a character painter and my artwork is silly and fun. Usually, my work consists of caricatures in different cartoon art styles. I've displayed work several times at the Super Wonder Gallery.  For over 6 years I have created chalk illustrations for Outer Layer's outdoor sign on Queen Street West in Toronto.  </p>
                                <p>This is my progress on my artist site I'm currently building in React (for non developers, it's a modular structure that should make updating this art portfolio much easier!)</p>
                                {/* <artistIntro /> */}
                                {/* <SimpleTween /> */}
                                <p class="email">Contact me at <a href="mailto:amayzinggdev@gmail.com" onClick={clickEmail}><span>moc.liamg[ta]vedggnizyama</span></a>
                                </p>
                            </div>
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


