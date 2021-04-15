import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";

/* https://greensock.com/react/ */

class artistIntro extends Component {

	constructor(props){
		super(props);
		this.wave = null;
	}


	componentDidMount(){
		// create logo tween
		this.wave = new TimelineLite({ repeat: -1 })
			.to(".waving", 2, { rotation: 25 }, { rotation: -25 });
	}


	render(){
		return <div className="container">

            <h2 className="hello">Hello! <span className="waving">👋</span></h2>
            <p className="artist-intro">I work on character paintings a few times a year and have had my work in the Super Wonder Gallery several times. I create original caricatures in a few different cartoon art styles or my own. For 6 years I have done the chalk art outdoor sign at Outer Layer in Toronto. </p>
			
		</div>;
	}
	
}

export default artistIntro;
