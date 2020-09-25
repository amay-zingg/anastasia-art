import React from 'react';
import './App.scss';
import hero from './assets/Hero.jpg';

// import chalkboardArt from './imageLists/chalkboardList';

import Chalkboard from './Components/Chalkboard';
import Caricatures from './Components/Caricatures';
import Costumes from './Components/Costumes';
import Paintings from './Components/Paintings';
import Nsfwart from './Components/Nsfwart';
import Route from './Components/Route';
import Header from './Components/Header';

// https://hugogiraudel.com/2017/05/13/using-create-react-app-on-netlify/

export default () => {
    return (
        <div>
            <Header />
            <Route path={process.env.PUBLIC_URL + '/'}>
                <img src={hero} alt="Hero"/>
            </Route>
            <Route path="/chalkboards">
                <Chalkboard items={chalkboardArt} />
            </Route>
            <Route path="/caricatures">
                <Caricatures />
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
    );
};

const chalkboardArt = [
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2020summer2.jpg',
        title: '2020 Summer',
        description: 'Stay Happy and Healthy to the Core'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2020summer.jpg',
        title: '2020 Summer',
        description: 'What\'s in Your Tarot?'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2020spring.jpg',
        title: '2020 Spring',
        description: 'Magic 8-Ball am I Stupid?'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2020vday.jpg',
        title: '2020 Valentine\'s Day',
        description: 'Our Love is Going to Simmer All Night Long'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019holiday.jpg',
        title: '2019 Holiday',
        description: 'What Cookies did you Leave Out for Santa? Have a Dope Holiday'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019fall.jpg',
        title: '2019 Fall',
        description: 'Introvert Activites'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019summer2.jpg',
        title: '2019 Summer',
        description: 'Who Invited the Herbivore? I Brought Hummus'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019summer.jpg',
        title: '2019 Summer',
        description: 'Don\'t Follow the Rules, Follow Local Dogs Online'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019dadday.jpg',
        title: '2018 Father\'s Day',
        description: 'For The Record You Rock Dad'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019momday.jpg',
        title: '2019 Mother\'s Day ',
        description: 'Cersei GoT | You\'re a Killer Mom'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019spring.jpg',
        title: '2019 Spring',
        description: 'You Can\'t Outrun Your Problems But You Can Jog Slightly Infront of Them and Pretend You Don\'t Hear Them Because You Have Your Headphones On'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2019vday.jpg',
        title: '2019 Valentine\'s Day',
        description: 'You\'ve Got the Sweetest Can on the Street'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018holiday.jpg',
        title: '2018 Winter',
        description: 'Thank You For Voting us Toronto\'s Best Unique Gift Store'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018fall.jpg',
        title: '2018 Fall',
        description: 'How Do I Turn These On? You\'re Killin\' Me Inside Kid'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018daydrinking.jpg',
        title: '2018 Summer',
        description: 'Day Drinking From A Mug to Keep Things Professional'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018pride.jpg',
        title: '2018 Pride',
        description: 'YASS Queen #pride2018'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018dadday.jpg',
        title: '2018 Father\'s Day ',
        description: 'My Papa Rocks, To One Sweet Dad'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018momday.jpg',
        title: '2018 Mother\'s Day',
        description: 'I want a snack, I need to pee, are we there yet? Hey there Momma Bear, Happy Mother\'s Day'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018spring.jpg',
        title: '2018 Spring',
        description: 'I\'m so old I can remember going through a whole day without taking a picture of anything'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2018vday.jpg',
        title: '2018 Valentine\'s Day',
        description: 'Happy Valentine\'s Day to a Hot Slice'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017holiday.jpg',
        title: '2017 Holiday',
        description: 'Santaur Claus is Comin\' to Town'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017fall.jpg',
        title: '2017 Fall',
        description: 'This Thanksgiving Cherish the Time Spent With Your Family as a Reminder of why you Moved Very Far Away From Your Family'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017summer2.jpg',
        title: '2017 Summer',
        description: 'Whatcha Gonna Dop With All That Hass?'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017summer1.jpg',
        title: '2017 Summer',
        description: 'You Are Face-Meltingly Awesome'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017summer.jpg',
        title: '2017 Summer',
        description: 'Life Has It\'s Ups and Downs But You Can Always Bounce Back'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017dadday.jpg',
        title: '2017 Father\'s Day ',
        description: 'Dad I Really Look Up To You'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017momday.jpg',
        title: '2017 Mother\'s Day',
        description: 'Thanks for not Eating Your Young Happy Mother\'s Day'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017spring.jpg',
        title: '2017 Spring',
        description: 'My Bucket List is Short But My Fuck It List Keeps Growing, Peelin\' Out!'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2017vday.jpg',
        title: '2017 Valentine\'s Day',
        description: 'I\'m velociRAPT up in You'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016holiday2.jpg',
        title: '2016 Holiday',
        description: 'Best Of Luck This Holiday Season'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016holiday.jpg',
        title: '2016 Holiday',
        description: 'You\'ve Got A Lot of Balls Coming In Here Dressed Like That'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016fall.jpg',
        title: '2016 Fall',
        description: 'Whoever Determined a 1-inch Candy Should be Called Fun Sized Should Reevaluate Their Standards For Entertainment'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016summer1.jpg',
        title: '2016 Summer',
        description: 'My Greatest Talent is Watching 5 Years of TV in One Week'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016summer.jpg',
        title: '2016 Summer',
        description: 'If You\'re Thrown Just Get Back on the Horse. Unless You Land on a Cactus, Then Roll Around and Scream'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016pride.jpg',
        title: '2016 Pride',
        description: 'Never RuPaulogize For Who You Are, Stay Fierce'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016dadday.jpg',
        title: '2016 Father\'s Day ',
        description: 'Anakin Skywalker Gifts a Tie to Darth Vader, I Can\'t Wear This'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016momday.jpg',
        title: '2016 Mother\'s Day',
        description: 'Your Children Should Always be Your Inspiration, Even if it\'s Just To Drink More'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016bobross.jpg',
        title: '2016 Spring',
        description: 'We Don\'t Make Mistakes Just Happy Accidents, Have a Happy Little Day'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2016vday.jpg',
        title: '2016 Valentine\'s Day',
        description: 'My Doctor Says I Can\'t Have Sex For 3 Weeks, What Does Your Dentist Say?'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015holiday2.jpg',
        title: '2015 Holiday',
        description: 'Deck The Halls Yo, Gettin\' Lit With 9 Candles, Rapping Paper'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015holiday.jpg',
        title: '2015 Holiday',
        description: 'Your Gift\'s in the Litterbox, Ha-PEE Holidays'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015fall.jpg',
        title: '2015 Fall',
        description: 'BOO, Jesus Greg You Scared Me Sheetless'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015summer2.jpg',
        title: '2015 Summer',
        description: 'I\'d Sell You To Satan For One Cornchip'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015summer1.jpg',
        title: '2015 Summer',
        description: 'Trex With Selfie Stick'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015summer.jpg',
        title: '2015 Summer',
        description: 'Today You\'re Going to Make a Difference, or Who Knows, Maybe You Won\'t, Maybe You\'ll Just Do Nothing All Day'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015dadday.jpg',
        title: '2015 Father\'s Day',
        description: 'Well Done, Medium Well, Medium, Medium Rare, Dad, You\'re the Rarest of Them All'
    },
    {
        image: 'https://www.anastasiamay.ca/chalkboardWatermark/2015spring.jpg',
        title: '2015 Spring',
        description: 'Trex With Paint Brush Trying to Paint the Chalkboard'
    }

];

