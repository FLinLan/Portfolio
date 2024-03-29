import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/btnImg.png';
import {Link} from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText"> I'm <span className="introName"> Max Lan </span> <br />ECE @ UW</span>
                <p className="introPara"> I'm a second year student interested in <br /> software development</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>

            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>        
    )
}

export default Intro;